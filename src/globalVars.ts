// a var for 1000 based units like 'mega byte' and 'kilo byte'
const units = [
  "Byte",
  "Kilo Byte",
  "Mega Byte",
  "Giga Byte",
  "Tera Byte",
  "Peta Byte"
];

// a var for 1024 based units like 'kibi byte'
const iUnits = [
  "Kibi Byte",
  "Mebi Byte",
  "Gibi Byte",
  "Tebi Byte",
  "Pebi Byte"
];

// a var for 1000 units shortcuts like 'KB' and 'MB'
const unitsShortcut = units.map((unit, i) => i === 0 ? "B" : `${unit[0]}B`);

// a var for 1024 units shortcuts like 'KiB' and 'MiB'
const iUnitsShortcut = iUnits.map(unit => `${unit[0]}iB`);

export { units, iUnits, unitsShortcut, iUnitsShortcut }