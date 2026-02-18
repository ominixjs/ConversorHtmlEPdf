import ejs from "ejs";

class HtmlParser {
  static async Parser(table) {
    return await ejs.renderFile("././view/table.ejs", {
      header: table.header,
      rows: table.rows,
    });
  }
}

export default HtmlParser;
