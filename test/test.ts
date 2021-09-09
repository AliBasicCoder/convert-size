import convertSize from "../mod.ts";
import { assertEquals } from "https://deno.land/std@0.73.0/testing/asserts.ts";

Deno.test({
  name: "number",
  fn() {
    assertEquals(convertSize(1000), "1 KB");
    assertEquals(convertSize(1024, { base: 1024 }), "1 KiB");
  },
});

Deno.test({
  name: "number and string",
  fn() {
    assertEquals(convertSize(1000 * 1000, "KB"), 1000);
    assertEquals(convertSize(1024 * 1024, "KiB"), 1024);
  },
});

Deno.test({
  name: "string and string",
  fn() {
    assertEquals(convertSize("1 GB", "MB"), 1000);
    assertEquals(convertSize("1 GiB", "MiB"), 1024);
  },
});

Deno.test({
  name: "options: stringify",
  fn() {
    assertEquals(convertSize(1000, "KB", { stringify: true }), "1 KB");
    assertEquals(convertSize("10 MB", "KB", { stringify: true }), "10000 KB");
  },
});

Deno.test({
  name: "options: accuracy",
  fn() {
    assertEquals(convertSize(1000, "KiB", { accuracy: 2 }), 0.98);
    assertEquals(
      convertSize(1000, "KiB", { stringify: true, accuracy: 2 }),
      "0.98 KiB"
    );
  },
});

Deno.test({
  name: "options: shortcut",
  fn() {
    assertEquals(convertSize(1000, { shortcut: false }), "1 Kilo Byte");
  },
});

Deno.test({
  name: "options: lower case",
  fn() {
    assertEquals(
      convertSize(1000, "KB", { stringify: true, lowerCase: true }),
      "1 kb"
    );
  },
});
