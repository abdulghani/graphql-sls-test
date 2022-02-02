import bigjson from "json-bigint";

describe("test bigjson", () => {
  it("parse empty string", () => {
    const temp = bigjson.parse("{}");

    expect(temp).toEqual({});
  });
});
