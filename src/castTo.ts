import { Data, units } from "./types";
import value from "./value";

export default function castTo(obj: Data & { to: units }): Data {
  // getting the difference between the value of
  // the two units
  const diff = (value(obj.unit) / value(obj.to));
  return {
    value: obj.value * diff,
    unit: obj.to
  }
}