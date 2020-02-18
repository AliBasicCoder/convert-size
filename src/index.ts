import { Options, units } from "./types";

// the main function of this module
function convertSize(from: string | number, to?: units | Options, options?: Options): string | number {
  if (typeof from === "number") {
    if (typeof to === "string") {

    } else {

    }
    return "";
  } else {
    return "";
  }
}

convertSize(1024, { accuracy: 5 });
convertSize("1 MB", { accuracy: 5 });
convertSize("1 MB", "KB", { accuracy: 5 });
convertSize(1000, "KB", { accuracy: 5 });
