import Reader from "./class/ReadFile.js";
import DataArrayBuilder from "./class/DataArrayBuilder.js";
import Table from "./class/Table.js";
import HtmlParser from "./ui/HtmlParer.js";

async function initReadFile() {
  const read = await Reader.Read("././excel.csv");
  const builder = DataArrayBuilder.ArrayBuilder(read);
  const table = new Table(builder);
  const html = await HtmlParser.Parser(table);
  console.log(html);
}

initReadFile();
