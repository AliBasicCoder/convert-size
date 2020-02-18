import { Data, OptionsBase } from "./types";

export default function applyOptions(data: Data, options: OptionsBase): string {
  return `${data.value} ${data.unit}`;
}