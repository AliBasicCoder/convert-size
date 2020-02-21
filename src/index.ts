import { Options, units, OptionsBase, Data, st, OptionsWithoutSt, OptionsWithSt } from "./types";
import applyOptions from "./applyOptions";
import getKeys from "./getKeys";
import castTo from "./castTo";
import value from "./value";

const getPower = (base: number, num: number): number => {
  let count = 1;
  while (num > 0) {
    num /= base;
    count++;
  }
  return count;
}

const defaultOptions: OptionsBase & st = {
  base: 1000,
  accuracy: 5,
  lowerCase: false,
  shortcut: true,
  stringify: false
}

function convertSize(from: number, to?: Options): string;
function convertSize(from: string, to?: Options): number;
function convertSize(from: number | string, to: units, options?: OptionsWithoutSt): number;
function convertSize(from: string, to: units, options: OptionsWithSt): string;

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
    const arr = [from, kb, mb, gb, pb];
    const arr2 = getKeys(op);

    let iStooped = 0;

    let resObj: Data = {
      value: arr.find((elem, i) => {
        const con = elem < base;
        if (i === arr.length - 1) return true;
        if (con) iStooped = i;
        return con;
      }) || 0,
      unit: arr2[iStooped]
    };

    if (typeof to === "string") {
      return applyOptions(castTo({ ...resObj, to }), op);
    }

    return applyOptions(resObj, op);
  } else {
    const regex = /([0-9.]*) ([\w ]*)/;
    // @ts-ignore
    const [all, val, unit] = from.match(regex);

    if (typeof to === "string") {
      const obj = castTo({ value: Number(val), unit, to });
      return op.stringify ? applyOptions(obj, op) : obj.value;
    } else {
      return (value(unit) * Number(val));
    }
  }
}

export default convertSize;
