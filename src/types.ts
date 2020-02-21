
export interface Data {
  value: number;
  unit: string;
}

export type units = "B" | "KB" | "MB" | "GB" | "PB" | "KiB" | "MiB" | "GiB" | "TiB" | "PiB";

export type st = { stringify: boolean; }

export interface OptionsBase {
  accuracy: number;
  shortcut: boolean;
  lowerCase: boolean;
  base: 1000 | 1024;
}

export type Options = Partial<OptionsBase & st>;

export type OptionsWithoutSt = Partial<OptionsBase>;

export type OptionsWithSt = Partial<OptionsBase> & st;
