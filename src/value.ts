import { units, iUnits, unitsShortcut, iUnitsShortcut } from "./globalVars";

/** maps the arr to lower case */
const mapArr = (arr: Array<string>) =>
  arr.map(str => str.toLowerCase());

/** get the index of unit */
const indOfUnit = (arr: Array<string>, unit: string) =>
  arr.indexOf(unit.toLowerCase());

/** maps the array and the index of unit */
const find = (arr: Array<string>, unit: string) =>
  indOfUnit(mapArr(arr), unit);

/** makes a function that gets the base to the power of value */
const maker = (base: number) => (value: number) => Math.pow(base, value);

const th = maker(1000);
const th24 = maker(1024);

export default function value(unit: string) {

  const UnitsMatch = find(units, unit);
  // USM stands for UnitsShortcutsMatch
  const USM = find(unitsShortcut, unit);
  const iUnitsMatch = find(iUnits, unit);
  const iUSM = find(iUnitsShortcut, unit);

  if (UnitsMatch > -1) {
    return th(UnitsMatch > 0 ? UnitsMatch : 1);
  }
  if (USM > -1) {
    return th(USM > 0 ? USM : 1);
  }
  if (iUnitsMatch > -1) {
    return th24(UnitsMatch > 0 ? UnitsMatch : 1);
  }
  if (iUSM > -1) {
    return th24(iUSM > 0 ? iUSM : 1);
  }
  throw new Error(`could find the value of the unit: ${unit}`);
}
