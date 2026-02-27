import Reader from "../class/Reader.js";
import Table from "../class/Table.js";
import DataArrayBuilder from "../class/DataArrayBuilder.js";
import HtmlParser from "../class/HtmlParser.js";
import PDFWriter from "../class/PDFWriter.js";

export default async function init(buffer) {
  const reader = new Reader();

  // Lê o arquivo CSV do excel
  const read = await reader.Read(buffer);
  if (read == null) return;

  // Controi uma estrutura de array com base no dados de entrada
  const builder = DataArrayBuilder.ArrayBuilder(read);

  // Pega dados contruidos e gera uma array mapeada
  const table = new Table(builder);

  // Renderiza uma tabela no html baseada na array mapeada usando EJS,
  // por fim, retornando uma string do HTML pronto
  const html = await HtmlParser.Parser(table);

  // Cria um PDF
  const pdfBuffer = Buffer.from(await PDFWriter.WritePDF(html));

  return { html, pdfBuffer };
}
