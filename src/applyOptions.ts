import { Options, Data } from "./types";

export default function applyOptions(data: Data, options: Options): string {
  return `${data.value} ${data.unit}`;
}