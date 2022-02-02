import {
  DefinitionNode,
  DocumentNode,
  EnumTypeDefinitionNode,
  FieldDefinitionNode,
  InputObjectTypeDefinitionNode,
  InputValueDefinitionNode,
  InterfaceTypeDefinitionNode,
  Kind,
  NamedTypeNode,
  ObjectTypeDefinitionNode,
  ScalarTypeDefinitionNode,
  TypeNode,
  UnionTypeDefinitionNode,
} from "graphql";
import lodash from "lodash";
import path from "path";
import prettier from "prettier";
import { InterfaceDeclaration, SourceFile } from "ts-morph";
import readFile from "./read-file";
import writeFile from "./write-file";

interface GeneratorOptions {
  outputPath: string;
  mode?: "class" | "interface";
}

class GraphqlTypeFactory {
  private tsMorphLib!: typeof import("ts-morph");
  private tsFile!: SourceFile;
  private config!: GeneratorOptions;
  private typeList!: string[];

  private addNullable() {
    this.tsFile.addTypeAlias({
      name: "Nullable",
      typeParameters: ["T"],
      isExported: false,
      type: `T | null | undefined`,
    });
  }

  private async createFile(config: GeneratorOptions) {
    this.typeList = [];
    this.config = config;
    this.tsMorphLib = await import("ts-morph");
    const project = new this.tsMorphLib.Project({
      tsConfigFilePath: path.join(process.cwd(), "./tsconfig.json"),
      manipulationSettings: {
        newLineKind: this.tsMorphLib.NewLineKind.LineFeed,
      },
    });
    this.tsFile = project.createSourceFile(this.config.outputPath, "", {
      overwrite: true,
    });
    this.addNullable();

    return this.tsFile;
  }

  private async formatFile(filePath: string) {
    const file = await readFile(filePath, { encoding: "utf-8" });
    // prettier.resolveConfig(path.join(process.cwd(), "./.prett"))
    await writeFile(filePath, prettier.format(file, { parser: "typescript" }), {
      encoding: "utf-8",
    });

    return this.tsFile;
  }

  private async end() {
    await this.tsFile.save();
    await this.formatFile(this.config.outputPath);

    return this.tsFile;
  }

  private getDefinitions(sdl: DocumentNode) {
    const { definitions } = sdl;
    return lodash.sortBy(definitions, ["kind", "name"]);
  }

  public async generate({
    sdl,
    config,
  }: {
    sdl: DocumentNode;
    config: GeneratorOptions;
  }) {
    const tsFile = await this.createFile(config);
    const definitions = this.getDefinitions(sdl);
    this.traverseDefinitions(definitions);

    // THIS HAS TO BE THE END
    return this.end();
  }

  private traverseDefinitions(defs: DefinitionNode[]) {
    defs.forEach((item) => {
      this.typeList.push(lodash.get(item, "name.value"));
      this.handleDefinitionKind(item);
    });
  }

  private handleDefinitionKind(node: DefinitionNode) {
    switch (node.kind) {
      case "SchemaDefinition":
        break;
      case "ObjectTypeDefinition":
        return this.createObjectInterface(node);
      case "ObjectTypeExtension":
        break;
      case "InputObjectTypeDefinition":
        return this.createInputInterface(node);
      case "InputObjectTypeExtension":
        break;
      case "InterfaceTypeDefinition":
        return this.createInterfaceInterface(node);
      case "InterfaceTypeExtension":
        break;
      case "ScalarTypeDefinition":
        return this.createScalarInterface(node);
      case "ScalarTypeExtension":
        break;
      case "EnumTypeDefinition":
        return this.createEnumInterface(node);
      case "EnumTypeExtension":
        break;
      case "UnionTypeDefinition":
        return this.createUnionInterface(node);
      case "UnionTypeExtension":
        break;
    }
  }

  private createInterfaceInterface(node: InterfaceTypeDefinitionNode) {
    const intr = this.tsFile.addInterface({
      trailingTrivia: (w) => w.writeLine("\n"),
      name: node.name.value,
      isExported: true,
      kind: this.tsMorphLib.StructureKind.Interface,
    });

    // FIELDS
    node.fields?.forEach((item) => {
      intr.addProperty({
        name: item.name.value,
        type: this.handleInputValueNode(item.type),
        hasQuestionToken: item.type.kind !== Kind.NON_NULL_TYPE,
      });
    });
  }

  private createUnionInterface(node: UnionTypeDefinitionNode) {
    this.tsFile.addTypeAlias({
      leadingTrivia: (w) => w.writeLine("\n"),
      name: node.name.value,
      isExported: true,
      type:
        node.types
          ?.map((item) =>
            this.handleNamedTypeNode(item, { ignoreNullable: true })
          )
          .join(" | ") ?? "",
    });
  }

  private createObjectInterface(node: ObjectTypeDefinitionNode) {
    const intr = this.tsFile.addInterface({
      name: node.name.value,
      isExported: true,
      kind: this.tsMorphLib.StructureKind.Interface,
      extends: node.interfaces?.map((item) => item.name.value) ?? [],
    });

    intr.addProperty({
      name: "__typename",
      type: `"${node.name.value}"`,
      hasQuestionToken: true,
    });
    node.fields?.forEach((item) => {
      this.addObjectMember(item, intr);
    });
  }

  private sortMethodArguments(nodes: readonly InputValueDefinitionNode[]) {
    // SORT OPTIONAL ARGUMENTS LAST
    return lodash
      .cloneDeep<InputValueDefinitionNode[]>((nodes ?? []) as any)
      .sort(
        (a, b) =>
          Number(a.type.kind !== Kind.NON_NULL_TYPE) -
          Number(b.type.kind !== Kind.NON_NULL_TYPE)
      );
  }

  private addObjectMember(
    node: FieldDefinitionNode,
    parent: InterfaceDeclaration
  ) {
    if (node.arguments?.length) {
      const sorted = this.sortMethodArguments(node.arguments);
      return parent.addMethod({
        name: node.name.value,
        parameters: sorted.map((item) => ({
          name: item.name.value,
          type: this.handleInputValueNode(item.type),
          hasQuestionToken: item.type.kind !== Kind.NON_NULL_TYPE,
        })),
        returnType: this.handleInputValueNode(node.type, { promise: true }),
      });
    }
    return parent.addProperty({
      name: node.name.value,
      type: this.handleInputValueNode(node.type),
    });
  }

  private createEnumInterface(node: EnumTypeDefinitionNode) {
    this.tsFile.addEnum({
      name: node.name.value,
      isExported: true,
      members:
        node.values?.map((item) => {
          return {
            name: item.name.value,
            value: item.name.value,
          };
        }) ?? [],
    });
  }

  private createScalarInterface(node: ScalarTypeDefinitionNode) {
    this.tsFile.addTypeAlias({
      name: node.name.value,
      isExported: true,
      type: `any`,
    });
  }

  private createInputInterface(node: InputObjectTypeDefinitionNode) {
    const intr = this.tsFile.addInterface({
      trailingTrivia: (w) => w.writeLine("\n"),
      name: node.name.value,
      isExported: true,
      kind: this.tsMorphLib.StructureKind.Interface,
    });

    // FIELDS
    node.fields?.forEach((item) => {
      intr.addProperty({
        name: item.name.value,
        type: this.handleInputValueNode(item.type),
        hasQuestionToken: item.type.kind !== Kind.NON_NULL_TYPE,
      });
    });
  }

  private handleInputValueNode(
    node: TypeNode,
    options?: { promise?: boolean; ignoreNullable?: boolean }
  ): string {
    const { promise, ignoreNullable } = options ?? {};
    let str: string;

    switch (node.kind) {
      case Kind.NON_NULL_TYPE:
        str = `${this.handleInputValueNode(node.type, {
          ignoreNullable: true,
        })}`;
        break;
      case Kind.LIST_TYPE:
        str = `Array<${this.handleInputValueNode(node.type)}>`;
        break;
      case Kind.NAMED_TYPE:
        str = this.handleNamedTypeNode(node, { ignoreNullable });
        break;
    }

    if (promise) {
      return `${str} | Promise<${str}>`;
    }

    return str;
  }

  private handleNamedTypeNode(
    node: NamedTypeNode,
    options?: { ignoreNullable?: boolean }
  ) {
    const { ignoreNullable } = options ?? {};
    let str: string;
    switch (node.name.value) {
      case "String":
        str = `string`;
        break;
      case "Boolean":
        str = `boolean`;
        break;
      case "Float":
      case "Int":
        str = `number`;
        break;
      default:
        // SCALAR, ENUM GOES HERE
        // if (!this.typeList.includes(node.name.value)) {
        //   throw new Error(`INVALID TYPE DEFINITION (${node.name.value})`);
        // }
        str = `${node.name.value}`;
        break;
    }

    if (ignoreNullable) {
      return str;
    }

    return `Nullable<${str}>`;
  }
}

export default GraphqlTypeFactory;
