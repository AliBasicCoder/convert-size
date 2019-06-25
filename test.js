"use strict";
exports.__esModule = true;
var fs_pro_1 = require("fs-pro");
var file = new fs_pro_1.File('hello.txt');
console.log(file);
file["delete"]();
