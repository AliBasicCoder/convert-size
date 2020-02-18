import { OptionsBase } from "./types";
import { units, iUnits, iUnitsShortcut, unitsShortcut } from "./globalVars";

export default function getKeys(op: OptionsBase) {
  const { base, lowerCase, shortcut } = op;

  const arr = (base === 1000 ? (shortcut ? units : unitsShortcut) : (shortcut ? iUnitsShortcut : iUnits));

  return lowerCase ? arr.map(str => str.toLowerCase()) : arr;
}