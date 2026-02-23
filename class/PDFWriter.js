import puppeteer from "puppeteer";

export default class PDFWriter {
  static async WritePDF(filename, html) {
    const browser = await puppeteer.launch({
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
    const page = await browser.newPage();

    await page.setContent(html, { waitUntil: "networkidle0" });
    await page.pdf({
      path: filename,
      format: "A4",
      printBackground: true,
    });

    await browser.close();
  }
}
