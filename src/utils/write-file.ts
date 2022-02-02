import fs from "fs";
import { promisify } from "util";

const writeFile = promisify(fs.writeFile);

export default writeFile;
