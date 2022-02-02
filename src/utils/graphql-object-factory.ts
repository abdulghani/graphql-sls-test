import {
  ConstValueNode,
  DefinitionNode,
  DocumentNode,
  EnumTypeDefinitionNode,
  EnumValueDefinitionNode,
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
import { SourceFile, VariableDeclarationKind } from "ts-morph";
import readFile from "./read-file";
import writeFile from "./write-file";

const FILE_HEADER = `/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */`;
const IMPORT_HEADER = `import * as graphql from "graphql";`
  .split("\n")
  .filter((i) => !!i)
  .join("\n");

class GraphQLObjectFactory {
  private tsMorphLib!: typeof import("ts-morph");
  private tsFile!: SourceFile;
  private typeList: string[] = [];
  private config: any = {};

  private async generateFile({
    outputPath,
    emitResolver,
  }: {
    outputPath: string;
    emitResolver?: boolean;
  }) {
    this.config = {
      outputPath,
      emitResolver,
    };
    this.tsMorphLib = await import("ts-morph");
    const tsProject = new this.tsMorphLib.Project({
      tsConfigFilePath: path.join(process.cwd(), "./tsconfig.json"),
      manipulationSettings: {
        newLineKind: this.tsMorphLib.NewLineKind.LineFeed,
      },
    });
    this.tsFile = tsProject.createSourceFile(outputPath, "", {
      overwrite: true,
    });
    this.typeList = [];

    return this.tsFile;
  }

  private getDefinitions(sdl: DocumentNode) {
    const { definitions } = sdl;
    return lodash.sortBy(definitions, ["kind", "name"]);
  }

  private async end(outputPath: string) {
    await this.tsFile.save();
    await this.formatFile(outputPath);

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

  public async generate({
    sdl,
    outputPath,
    emitResolver,
  }: {
    sdl: DocumentNode;
    outputPath: string;
    emitResolver?: boolean;
  }) {
    await this.generateFile({ outputPath, emitResolver });
    const definitions = this.getDefinitions(sdl);

    this.traverseDefinitions(definitions);
    this.tsFile.insertText(0, [FILE_HEADER, IMPORT_HEADER].join("\n"));

    // THIS HAS TO BE THE END
    return this.end(outputPath);
  }

  private traverseDefinitions(definitions: DefinitionNode[]) {
    const order = [
      Kind.SCALAR_TYPE_DEFINITION,
      Kind.ENUM_TYPE_DEFINITION,
      Kind.INPUT_OBJECT_TYPE_DEFINITION,
      Kind.OBJECT_TYPE_DEFINITION,
      Kind.UNION_TYPE_DEFINITION,
    ];
    const sorted = definitions.sort((a, b) => {
      return order.indexOf(a.kind) - order.indexOf(b.kind);
    });
    sorted.forEach((item) => {
      this.typeList.push(lodash.get(item, "name.value"));
      this.handleDefinitionType(item);
    });
  }

  private handleDefinitionType(def: DefinitionNode) {
    switch (def.kind) {
      case "SchemaDefinition":
        break;
      case "ObjectTypeDefinition":
        return this.createGraphqlObject(def);
      case "ObjectTypeExtension":
        break;
      case "InputObjectTypeDefinition":
        return this.createGraphQLInput(def);
      case "InputObjectTypeExtension":
        break;
      case "InterfaceTypeDefinition":
        return this.createGraphQLInterface(def);
      case "InterfaceTypeExtension":
        break;
      case "ScalarTypeDefinition":
        return this.createGraphqlScalar(def);
      case "ScalarTypeExtension":
        break;
      case "EnumTypeDefinition":
        return this.createGraphqlEnum(def);
      case "EnumTypeExtension":
        break;
      case "UnionTypeDefinition":
        return this.createGraphqlUnion(def);
      case "UnionTypeExtension":
        break;
    }
  }

  private buildObjectDeclaration(obj: any) {
    return `{${Object.keys(obj)
      .reduce((total: any, key) => {
        if (obj[key]) {
          total.push(`"${key}": ${obj[key]}`);
        }
        return total;
      }, [])
      .join(",")}}`;
  }

  private buildGraphqlObjectFields(
    fields?: readonly FieldDefinitionNode[],
    parent?: ObjectTypeDefinitionNode | InterfaceTypeDefinitionNode
  ) {
    const declaration: any = {};
    fields?.forEach?.((item) => {
      declaration[item.name.value] = this.buildObjectDeclaration({
        type: `${this.handleGraphqlType(item.type)}`,
        description: (() => {
          if (item.description?.value) {
            return `"${item.description.value}"`;
          }
          return undefined;
        })(),
        args: (() => {
          if (item.arguments?.length) {
            return `{${item.arguments.map((argItem) => {
              const argDeclaration = {
                type: this.handleGraphqlType(argItem.type),
              };
              return `"${argItem.name.value}": ${this.buildObjectDeclaration(
                argDeclaration
              )}`;
            })}}`;
          }

          return undefined;
        })(),
        resolve: (() => {
          const isQueryMutation = ["query", "mutation"]?.includes?.(
            (parent?.name?.value ?? "")?.toLowerCase?.()
          );
          if (
            this.config.emitResolver &&
            (isQueryMutation || item.arguments?.length)
          ) {
            return `function (source, args, context, info) {}`;
          }
          return undefined;
        })(),
      });
    });

    return this.buildObjectDeclaration(declaration);
  }

  private createGraphqlObject(def: ObjectTypeDefinitionNode) {
    this.tsFile.addVariableStatement({
      leadingTrivia: (w) => w.writeLine("\n"),
      declarationKind: VariableDeclarationKind.Const,
      isExported: true,
      declarations: [
        {
          name: def.name.value,
          initializer: `new graphql.GraphQLObjectType(${this.buildObjectDeclaration(
            {
              name: `"${def.name.value}"`,
              description: (() => {
                if (def.description?.value) {
                  return `"${def.description.value}"`;
                }
                return undefined;
              })(),
              interfaces: (() => {
                if (!def.interfaces?.length) return undefined;
                return `[${def.interfaces
                  ?.map((item) => item.name.value)
                  .join(",")}]`;
              })(),
              fields: (() => {
                if (!def.fields?.length) {
                  return undefined;
                }
                return `${this.buildGraphqlObjectFields(def.fields, def)}`;
              })(),
            }
          )})`,
        },
      ],
    });
  }

  private createGraphQLInterface(def: InterfaceTypeDefinitionNode) {
    this.tsFile.addVariableStatement({
      leadingTrivia: (w) => w.writeLine("\n"),
      declarationKind: VariableDeclarationKind.Const,
      isExported: true,
      declarations: [
        {
          name: def.name.value,
          initializer: `new graphql.GraphQLInterfaceType(${this.buildObjectDeclaration(
            {
              name: `"${def.name.value}"`,
              description: (() => {
                if (def.description?.value) {
                  return `"${def.description.value}"`;
                }
                return undefined;
              })(),
              fields: `${this.buildGraphqlObjectFields(def.fields, def)}`,
            }
          )})`,
        },
      ],
    });
  }

  private createGraphqlScalar(def: ScalarTypeDefinitionNode) {
    this.tsFile.addVariableStatement({
      leadingTrivia: (w) => w.writeLine("\n"),
      declarationKind: VariableDeclarationKind.Const,
      isExported: true,
      declarations: [
        {
          name: def.name.value,
          initializer: `new graphql.GraphQLScalarType(${this.buildObjectDeclaration(
            {
              name: `"${def.name.value}"`,
              description: (() => {
                if (def.description?.value) {
                  return `"${def.description.value}"`;
                }
                return undefined;
              })(),
            }
          )})`,
        },
      ],
    });
  }

  private createGraphqlEnum(def: EnumTypeDefinitionNode) {
    this.tsFile.addVariableStatement({
      leadingTrivia: (w) => w.writeLine("\n"),
      declarationKind: VariableDeclarationKind.Const,
      isExported: true,
      declarations: [
        {
          name: def.name.value,
          initializer: `new graphql.GraphQLEnumType(${this.buildObjectDeclaration(
            {
              name: `"${def.name.value}"`,
              description: (() => {
                if (def.description?.value) {
                  return `"${def.description.value}"`;
                }
                return undefined;
              })(),
              values: this.buildObjectDeclaration(
                def.values?.reduce((total: any, item) => {
                  total[item.name.value] = this.buildObjectDeclaration({
                    value: `"${item.name.value}"`,
                  });
                  return total;
                }, {})
              ),
            }
          )})`,
        },
      ],
    });
  }

  private createGraphqlUnion(def: UnionTypeDefinitionNode) {
    const validTypes =
      def.types?.filter((item) => this.typeList.includes(item.name.value)) ??
      [];

    if (validTypes.length !== def.types?.length) {
      throw new Error(
        `INVALID TYPES FOR UNION (${def.types
          ?.filter((item) => !this.typeList.includes(item.name.value))
          .map((item) => item.name.value)
          .join(", ")})`
      );
    }

    this.tsFile.addVariableStatement({
      leadingTrivia: (w) => w.writeLine("\n"),
      declarationKind: VariableDeclarationKind.Const,
      isExported: true,
      declarations: [
        {
          name: def.name.value,
          initializer: `new graphql.GraphQLUnionType(${this.buildObjectDeclaration(
            {
              name: `"${def.name.value}"`,
              description: (() => {
                if (def.description?.value)
                  return `"${def.description?.value}"`;
                return undefined;
              })(),
              types: `[${validTypes.map((item) => item.name.value)}]`,
            }
          )})`,
        },
      ],
    });
  }

  private handleEnumValueDefinition(node: EnumValueDefinitionNode) {}

  private buildGraphqlInputFields(
    fields?: readonly InputValueDefinitionNode[]
  ) {
    const declaration: any = {};
    fields?.forEach?.((item) => {
      declaration[item.name.value] = this.buildObjectDeclaration({
        type: `${this.handleGraphqlType(item.type)}`,
        description: (() => {
          if (item.description?.value) {
            return `"${item.description.value}"`;
          }
          return undefined;
        })(),
        defaultValue: (() => {
          if (item.defaultValue) {
            return `${this.handleGraphqlValue(item.defaultValue)}`;
          }
          return undefined;
        })(),
      });
    });

    return this.buildObjectDeclaration(declaration);
  }

  private createGraphQLInput(def: InputObjectTypeDefinitionNode) {
    this.tsFile.addVariableStatement({
      declarationKind: VariableDeclarationKind.Const,
      isExported: true,
      leadingTrivia: (w) => w.writeLine("\n"),
      declarations: [
        {
          name: def.name.value,
          initializer: `new graphql.GraphQLInputObjectType(
            ${this.buildObjectDeclaration({
              name: `"${def.name.value}"`,
              description: (() => {
                if (def.description?.value) {
                  return `"${def.description.value}"`;
                }
                return undefined;
              })(),
              fields: this.buildGraphqlInputFields(def.fields),
            })})`,
        },
      ],
    });
  }

  private handleGraphqlValue(node: ConstValueNode): string {
    switch (node.kind) {
      case Kind.STRING:
      case Kind.ENUM:
        return `"${node.value}"`;
      case Kind.INT:
      case Kind.FLOAT:
      case Kind.BOOLEAN:
        return `${node.value}`;
      case Kind.LIST:
        return `[ ${node.values.map((item) =>
          this.handleGraphqlValue(item)
        )} ]`;

      default:
        throw new Error(`GraphqlValue unhandled (${node.kind})`);
    }
  }

  private handleGraphqlType(node: TypeNode): string {
    switch (node.kind) {
      case Kind.NON_NULL_TYPE:
        return `new graphql.GraphQLNonNull(${this.handleGraphqlType(
          node.type
        )})`;
      case Kind.LIST_TYPE:
        return `new graphql.GraphQLList(${this.handleGraphqlType(node.type)})`;
      case Kind.NAMED_TYPE:
        return `${this.handleNamedType(node)}`;
    }
  }

  private handleNamedType(node: NamedTypeNode): string {
    switch (node.name.value) {
      case "String":
        return `graphql.GraphQLString`;
      case "Boolean":
        return `graphql.GraphQLBoolean`;
      case "Float":
        return `graphql.GraphQLFloat`;
      case "Int":
        return `graphql.GraphQLInt`;
      default:
        // SCALAR, ENUM GOES HERE
        if (!this.typeList.includes(node.name.value)) {
          throw new Error(`INVALID TYPE DEFINITION (${node.name.value})`);
        }
        return node.name.value;
    }
  }
}

export default GraphQLObjectFactory;
