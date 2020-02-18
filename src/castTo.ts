import { Data, units } from "./types";
import value from "./value";

export default function castTo(obj: Data & { to: units }): Data {
  const diff = (value(obj.unit) / value(obj.to));
  return {
    value: obj.value * diff,
    unit: obj.to
  }
}