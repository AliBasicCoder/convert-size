import {
  Options,
  units,
  OptionsBase,
  Data,
  st,
  OptionsWithoutSt,
  OptionsWithSt
} from "./types";
import applyOptions, { fix } from "./applyOptions";
import getKeys from "./getKeys";
import castTo from "./castTo";
import value from "./value";

// the default options
const defaultOptions: OptionsBase & st = {
  base: 1000,
  accuracy: 5,
  lowerCase: false,
  shortcut: true,
  stringify: false
};

function convertSize(from: number, to?: Options): string;
function convertSize(from: string, to?: Options): number;
function convertSize(
  from: number | string,
  to: units,
  options?: OptionsWithoutSt
): number;
function convertSize(from: string, to: units, options: OptionsWithSt): string;

// the main function of this module
function convertSize(
  from: string | number,
  to?: units | Options,
  options?: Options
): string | number {
  // defaulting the options
  const op = Object.assign(
    {},
    defaultOptions,
    typeof to === "object" ? to : options || {}
  );
  const { base } = op;

  if (typeof from === "number") {
    // getting how may KB (or KiB) in the number passed
    const kb = from / base;
    const mb = kb / base;
    const gb = mb / base;
    const tb = gb / base;
    const pb = tb / base;

    const arr = [from, kb, mb, gb, pb];
    // getting the needed keys (units)
    const arr2 = getKeys(op);

    // a var to store where have the "arr.find" loop stopped
    let iStooped = 0;

    const resObj: Data = {
      // looping throw arr and finding the item
      // that is less that the base
      value:
        arr.find((element, i) => {
          const con = element < base;
          // returning true if it's the last element
          if (i === arr.length - 1) return true;
          // if the element is less than the base setting
          // iStooped to the index
          if (con) iStooped = i;
          return con;
        }) || 0,
      // getting the key (unit) were the loop has stopped
      unit: arr2[iStooped]
    };

    if (typeof to === "string") {
      // making a cast if "to" is a string
      const casted = castTo({ ...resObj, to });
      if (op.stringify) return applyOptions(casted, op);
      else return fix(casted.value, op.accuracy);
    }
    // applying the options to the object
    // and switching it to a string
    return applyOptions(resObj, op);
  } else {
    const regex = /([0-9.]*) ([\w ]*)/;
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [all, val, unit] = from.match(regex);

    if (typeof to === "string") {
      // checking if a cast is needed
      const obj = castTo({ value: Number(val), unit, to });
      // checking if a switch to a string is needed
      return op.stringify ? applyOptions(obj, op) : obj.value;
    } else {
      // getting the value of the unit (how many bytes is in 1 of it)
      // and multiplying it my the val
      return value(unit) * Number(val);
    }
  }
}

export default convertSize;
