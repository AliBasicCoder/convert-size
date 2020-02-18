import { Data, OptionsBase } from "./types";
import { units, iUnits, iUnitsShortcut, unitsShortcut } from "./globalVars";

function fix(number: number, decimal: number) {
  const fixer = Math.pow(10, decimal);
  return Math.round(number * fixer) / fixer;
}

export function swUnit(unit: string, op: OptionsBase) {
  const obj = {
    shortcut: unit.length <= 3,
    lowerCase: unit.toLowerCase() === unit
  }
  let res: string;
  if (op.shortcut !== obj.shortcut) {
    if (obj.shortcut) {
      res = (unit.indexOf("i") === -1 ? units : iUnits).find(str => str[0].toLowerCase() === unit[0].toLowerCase()) || "";
    } else {
      res = (units.find(str => str.toLowerCase() === unit.toLowerCase())) || (iUnits.find(str => str.toLowerCase() === unit.toLowerCase())) || "";
    }
  } else res = unit;
  if (op.lowerCase !== obj.lowerCase) {
    if (obj.lowerCase) {
      res = obj.shortcut ?
        (res.indexOf("i") === -1) ? res.toUpperCase() : `${res[0].toUpperCase()}i${res[2].toUpperCase()}`
        : res.split(" ").reduce((pv, cv) => `${pv} ${cv[0].toUpperCase()}${cv.slice(1)}`);
    } else {
      res = res.toLowerCase();
    }
  }
  return res;
}

export default function applyOptions(data: Data, options: OptionsBase): string {
  return `${fix(data.value, options.accuracy)} ${swUnit(data.unit, options)}`;
}