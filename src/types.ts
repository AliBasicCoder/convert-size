
export interface Data {
  value: number;
  unit: units;
}

export type units = "B" | "KB" | "MB" | "GB" | "PB" | "KiB" | "MiB" | "GiB" | "TiB" | "PiB";

export interface Options {
  accuracy?: number;
  shortcut?: boolean;
  lowerCase?: boolean;
  base?: 1000 | 1024;
}