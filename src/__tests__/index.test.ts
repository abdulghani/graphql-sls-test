import "reflect-metadata";
import TestController from "./test.controller";
import TestModule from "./test.module";
import { PARAMTYPES_METADATA, Type } from "./test.util";

describe("it works", () => {
  it("works", () => {
    const param = Reflect.getMetadata(PARAMTYPES_METADATA, TestController);
    const deps = param.map((item: any) => TestModule[item.name]);

    const instance = new (TestController as Type)(...deps) as TestController;
    console.log("GETTING HELLO", { hello: instance.testGetHello() });

    expect(1).toBe(1);
  });
});
