"use strict";
exports.__esModule = true;
function convertSize(size) {
    if (!size || size === 0 || size === 1) {
        return (size + ' byte');
    }
    if (size < 1024) {
        return (size + ' bytes');
    }
    var kb = size / 1024;
    var mb = kb / 1024;
    var gb = mb / 1024;
    var tb = gb / 1024;
    var bb = tb / 1024;
    if (kb < 1024) {
        return (kb.toPrecision(3) + ' KB');
    }
    if (mb < 1024) {
        return (mb.toPrecision(3) + ' MB');
    }
    if (gb < 1024) {
        return (gb.toPrecision(3) + ' GB');
    }
    if (tb < 1024) {
        return (tb.toPrecision(3) + ' TB');
    }
    return (bb.toPrecision(3) + ' PB');
}
exports.convertSize = convertSize;
