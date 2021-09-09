type OptionsBase = { base: number, lowerCase: boolean, shortcut: boolean, accuracy: number };
type OptionWithSt = OptionsBase & { stringify: true };
type OptionWithoutSt = OptionsBase & { stringify?: false };
type Options = OptionWithSt | OptionWithoutSt;
type units = "B" | "KB" | "MB" | "GB" | "PB" | "KiB" | "MiB" | "GiB" | "TiB" | "PiB";
// default options
const dOp: Options = { base: 1000, lowerCase: false, shortcut: true, accuracy: 5 };

const u1000 = ["Bytes", "Kilo Byte", "Mega Byte", "Giga Byte", "Tera Byte", "Peta Byte"];
const u1024 = ["Bytes", "Kibi Byte", "Mebi Byte", "Gibi Byte", "Tebi Byte", "Pebi Byte"];
const u1000short = u1000.map((str, i) => i === 0 ? "B" : str[0] + "B");
const u1024short = u1024.map((str, i) => i === 0 ? "B" : str[0] + "iB");
const u1000lower = u1000.map(str => str.toLowerCase());
const u1024lower = u1024.map(str => str.toLowerCase());
const u1000shortLower = u1000short.map(str => str.toLowerCase());
const u1024shortLower = u1024short.map(str => str.toLowerCase());
const upTo = u1000.length;

export default function convertSize(from: number | string | BigInt, toOrOptions?: Partial<Options> | units, maybeOptions?: Partial<Options>): number | string {
  const options = Object.assign({}, dOp, typeof toOrOptions === "object" ? toOrOptions : maybeOptions);
  const to = typeof toOrOptions === "object" ? undefined : toOrOptions;

  if (typeof from === "bigint") from = Number(from);
  if (typeof from === "number") {
    if (!to) return toStr(options, ...findUnitValue(options, from));

    const [value, index, base] = toUnit(from, to);
    options.base = base;
    if (options.stringify)
      return toStr(options, value, index);

    return fix(value, options.accuracy);
  }
  if (typeof from === "string") {
    const regex = /([0-9.]*) ([\w ]*)/;
    const match = from.match(regex);
    if (!match) throw new Error("Invalid string");
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let [_, val, unit] = match;
    const val2 = Number(val);
    unit = unit.toLocaleLowerCase();
    unit.endsWith("s") && (unit = unit.slice(0, unit.length - 1));
    const index1 = u1000lower.indexOf(unit);
    const index2 = u1000shortLower.indexOf(unit);
    const index3 = u1024lower.indexOf(unit);
    const index4 = u1024shortLower.indexOf(unit);
    let index;
    let valueInBytes = 0;
    if (index1 !== -1 || index2 !== -1) {
      index = index1 !== -1 ? index1 : index2;
      valueInBytes = val2 * Math.pow(1000, index);
    }
    else if (index3 !== -1 || index4 !== -1) {
      index = index3 !== -1 ? index2 : index4;
      valueInBytes = val2 * Math.pow(1024, index);
    }
    else throw new Error("Unknown Unit");

    if (to) {
      const [value, unit, base] = toUnit(valueInBytes, to);
      options.base = base;
      if (options.stringify)
        return toStr(options, value, unit);

      return value;
    } else return valueInBytes;
  }
  return "";
}

function toStr(options: Options, value: number, index: number): string {
  let targetArr: string[];
  if (options.lowerCase && options.shortcut) targetArr = options.base === 1000 ? u1000shortLower : u1024shortLower;
  else if (options.shortcut && !options.lowerCase) targetArr = options.base === 1000 ? u1000short : u1024short;
  else if (!options.shortcut && options.lowerCase) targetArr = options.base === 1000 ? u1000lower : u1024lower;
  else targetArr = options.base === 1000 ? u1000 : u1024;

  return `${fix(value, options.accuracy)} ${targetArr[index]}`;
}

function findUnitValue(options: Options, from: number): [number, number] {
  let res = from, iStop = 0;
  for (let i = 0; i < upTo; i++) {
    if (res < options.base) {
      iStop = i;
      break;
    }
    res /= options.base;
  }
  return [res, iStop];
}

function toUnit(from: number, to: units): [number, number, number] {
  const index = u1000short.indexOf(to);
  const index2 = u1024short.indexOf(to);
  if (index !== -1) {
    return [from / Math.pow(1000, index), index, 1000];
  }
  else if (index2 !== -1) {
    return [from / Math.pow(1024, index2), index2, 1024];
  }
  else throw new Error("UnKnown Unit\n\nNote: only uppercase shortcuts (like MB, KiB) are allowed as `to` argument");
}

/** function to approximate the number passed to a certain decimal */
export function fix(num: number, decimal: number) {
  const fixer = Math.pow(10, decimal);
  return Math.round(num * fixer) / fixer;
}
