const { default: convertSize } = require("./dist/convertSize.min")
const assert = require("assert");

describe("test", () => {
  it("number", done => {
    assert.equal(convertSize(1000), "1 KB");
    done();
  });
  it("number and string", done => {
    assert.equal(convertSize(1000 * 1000, "KB"), 1000);
    done();
  });
  it("string and string", done => {
    assert.equal(convertSize("1 GB", "MB"), 1000);
    done();
  });
})