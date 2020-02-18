
export interface Data {
  value: number;
  unit: string;
}

export type units = "B" | "KB" | "MB" | "GB" | "PB" | "KiB" | "MiB" | "GiB" | "TiB" | "PiB";

export interface OptionsBase {
  accuracy: number;
  shortcut: boolean;
  lowerCase: boolean;
  base: 1000 | 1024;
}

export type Options = Partial<OptionsBase>;
