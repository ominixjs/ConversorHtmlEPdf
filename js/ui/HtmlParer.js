import ejs from "ejs";

export default class HtmlParser {
  static async Parser(table) {
    return await ejs.renderFile("././view/table.ejs", {
      header: table.header,
      rows: table.rows,
    });
  }
}
