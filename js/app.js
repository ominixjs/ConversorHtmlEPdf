import Reader from "./class/Reader.js";
import Writer from "./class/Writer.js";
import Table from "./class/Table.js";
import DataArrayBuilder from "./class/DataArrayBuilder.js";
import HtmlParser from "./ui/HtmlParer.js";
import PDFWriter from "./class/PDFWriter.js";

const reader = new Reader();
const writer = new Writer();

async function init() {
  // Lê o arquivo CSV do excel
  const read = await reader.Read("././excel.csv");
  // Controi uma estrutura de array com base no dados de entrada
  const builder = DataArrayBuilder.ArrayBuilder(read);
  // Pega dados contruidos e gera uma array mapeada
  const table = new Table(builder);
  // Renderiza uma tabela no html baseada na array mapeada usando EJS,
  // por fim, retornando uma string do HTML pronto
  const html = await HtmlParser.Parser(table);
  // Usa string do HTML contendo uma tabela para gerar um arquivo .html
  writer.Write(Date.now() + ".html", html);
  // Cria um PDF
  await PDFWriter.WritePDF(Date.now() + ".pdf", html);
}

init();
