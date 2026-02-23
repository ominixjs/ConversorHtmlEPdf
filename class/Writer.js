import fs from "fs";
import util from "util";

export default class Writer {
  constructor() {
    this.writer = util.promisify(fs.writeFile);
  }

  async Write(filepath, data) {
    try {
      await this.writer(filepath, data);
      return true;
    } catch (err) {
      return false;
    }
  }
}
 