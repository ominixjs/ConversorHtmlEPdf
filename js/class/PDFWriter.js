import pdf from "html-pdf";

export default class PDFWriter {
  static WritePDF(filename, html) {
    pdf.create(html, {}).toFile(filename, (err) => {
      console.log(err);
    });
  }
}
