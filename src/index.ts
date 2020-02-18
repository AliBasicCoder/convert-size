import { Options, units, OptionsBase, Data } from "./types";
import applyOptions from "./applyOptions";
import getKeys from "./getKeys";

const defaultOptions: OptionsBase = {
  base: 1000,
  accuracy: 5,
  lowerCase: false,
  shortcut: true
}

// the main function of this module
function convertSize(from: string | number, to?: units | Options, options?: Options): string | number {
  const op = Object.assign(defaultOptions, typeof to === "object" ? to : (options || {}));
  const { base } = op;

  if (typeof from === "number") {

    const
      kb = from / base,
      mb = kb / base,
      gb = mb / base,
      tb = gb / base,
      pb = tb / base;
    const [
      byte,
      kiloByte,
      megaByte,
      gigaByte,
      teraByte,
      petaByte
    ] = getKeys(op);

    let resObj: Data;

    if (from < base) {
      resObj = { value: from, unit: byte };
    } else if (kb < base) {
      resObj = { value: kb, unit: kiloByte };
    } else if (mb < base) {
      resObj = { value: mb, unit: megaByte };
    } else if (gb < base) {
      resObj = { value: gb, unit: gigaByte };
    } else if (tb < base) {
      resObj = { value: tb, unit: teraByte };
    } else {
      resObj = { value: pb, unit: petaByte };
    }

    if (typeof to === "string") {

    }

    return applyOptions(resObj, op);
  } else {
    return "";
  }
}

export default convertSize;
