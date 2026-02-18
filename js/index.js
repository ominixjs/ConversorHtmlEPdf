import Reader from "./class/ReadFile.js";
import DataArrayBuilder from "./class/DataArrayBuilder.js";
import Table from "./class/Table.js";

async function initReadFile() {
  const read = await Reader.Read("././excel.csv");
  const builder = DataArrayBuilder.ArrayBuilder(read);
  const table = new Table(builder);
  console.log(table.RowCount);
}

initReadFile();
