import { OptionsBase } from "./types";
import { units, iUnits, iUnitsShortcut, unitsShortcut } from "./globalVars";

/**
 * a function to get the needed keys (units)
 * by options
 * @param op the options to get the keys with
 */
export default function getKeys(op: OptionsBase) {
  const { base, lowerCase, shortcut } = op;

  const arr = (base === 1000 ? (shortcut ? unitsShortcut : units) : (shortcut ? iUnitsShortcut : iUnits));

  // mapping the array to lower case if lowerCase is true
  return lowerCase ? arr.map(str => str.toLowerCase()) : arr;
}