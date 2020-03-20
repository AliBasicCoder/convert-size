const { default: convertSize } = require("./dist/convertSize.min");
const assert = require("assert");

describe("main", () => {
  describe("1000 base", () => {
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
  });
  describe("1024 base", () => {
    it("number", done => {
      assert.equal(convertSize(1024, { base: 1024 }), "1 KiB");
      done();
    });
    it("number and string", done => {
      assert.equal(convertSize(1024 * 1024, "KiB"), 1024);
      done();
    });
    it("string and string", done => {
      assert.equal(convertSize("1 GiB", "MiB"), 1024);
      done();
    });
  });
});

describe("options", () => {
  it("stringify", done => {
    assert.equal(convertSize(1000, "KB", { stringify: true }), "1 KB");
    done();
  });
  it("accuracy number", done => {
    assert.equal(convertSize(1000, "KiB", { accuracy: 2 }), 0.98);
    done();
  });
  it("accuracy string", done => {
    assert.equal(
      convertSize(1000, "KiB", { stringify: true, accuracy: 2 }),
      "0.98 KiB"
    );
    done();
  });
  it("shortcut", done => {
    assert.equal(convertSize(1000, { shortcut: false }), "1 Kilo Byte");
    done();
  });
  it("lower case", done => {
    assert.equal(
      convertSize(1000, "KB", { stringify: true, lowerCase: true }),
      "1 kb"
    );
    done();
  });
});
