import puppeteer from "puppeteer";

export default class PDFWriter {
  static async WritePDF(html) {
    const browser = await puppeteer.launch({
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
    const page = await browser.newPage();

    await page.setContent(html, { waitUntil: "networkidle0" });

    const pdfBuffer = await page.pdf({
      format: "A4",
    });

    await browser.close();

    return pdfBuffer;
  }
}
