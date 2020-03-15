import { Data, OptionsBase } from "./types";
import { units, iUnits } from "./globalVars";

/**
 * a function to approximate the number passed
 * to a certain decimal
 * @param number the number to approximate
 * @param decimal the decimal count
 */
function fix(number: number, decimal: number) {
  const fixer = Math.pow(10, decimal);
  return Math.round(number * fixer) / fixer;
}

/**
 * a function to switch units
 * passed on options passed
 * @param unit the unit to switch
 * @param op the options
 */
export function swUnit(unit: string, op: OptionsBase) {
  const obj = {
    // true if the unit passed is a shortcuts
    shortcut: unit.length <= 3,
    // true if the unit is a lowercase string
    lowerCase: unit.toLowerCase() === unit
  }
  let res: string;
  if (op.shortcut !== obj.shortcut) {
    // finding the needed unit by finding
    // the element the has the first character
    if (obj.shortcut) {
      res = (unit.indexOf("i") === -1 ? units : iUnits).find(str => str[0].toLowerCase() === unit[0].toLowerCase()) || "";
    } else {
      res = (units.find(str => str.toLowerCase() === unit.toLowerCase())) || (iUnits.find(str => str.toLowerCase() === unit.toLowerCase())) || "";
    }
  } else res = unit;
  if (op.lowerCase !== obj.lowerCase) {
    if (obj.lowerCase) {
      res = obj.shortcut ?
        (res.indexOf("i") === -1) ?
          res.toUpperCase() :
          `${res[0].toUpperCase()}i${res[2].toUpperCase()}` :
        res
          .split(" ")
          .reduce((pv, cv) => `${pv} ${cv[0].toUpperCase()}${cv.slice(1)}`, "")
          .slice(1)
    } else {
      res = res.toLowerCase();
    }
  }
  return res;
}

export default function applyOptions(data: Data, options: OptionsBase): string {
  const fixed = fix(data.value, options.accuracy);
  return `${fixed} ${swUnit(data.unit, options)}${(fixed > 1 && !options.shortcut) ? "s" : ""}`;
}

