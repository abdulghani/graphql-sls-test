import fs from "fs";
import { promisify } from "util";

const readFile = promisify(fs.readFile);

export default readFile;
