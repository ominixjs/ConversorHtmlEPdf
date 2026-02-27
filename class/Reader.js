export default class Reader {
  Read(buffer) {
    try {
      return buffer.toString("utf8");
    } catch (err) {
      console.error(err);
      return null;
    }
  }
}
