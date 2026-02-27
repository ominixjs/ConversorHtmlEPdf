import express from "express";
import archiver from "archiver";
import upload from "./class/upload.js";
import init from "./services/init.js";

const app = express();

// Renderizar arquivos
app.set("view engine", "ejs");

// Pasta estática
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/convert", upload.single("file"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).send("Arquivo não enviado");
    }

    // Arquivo convertido
    const result = await init(req.file.buffer);

    if (!result) {
      return res.status(400).send("Erro na conversão");
    }

    const { html, pdfBuffer } = result;

    res.setHeader("Content-Type", "application/zip");
    res.setHeader("Content-Disposition", "attachment; filename=resultado.zip");

    const archive = archiver("zip");

    archive.on("error", (err) => {
      console.error(err);
      res.status(500).send("Erro ao gerar ZIP");
    });

    archive.pipe(res);

    const name = Date.now();
    archive.append(html, { name: name + ".html" });
    archive.append(pdfBuffer, { name: name + ".pdf" });

    archive.finalize();
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro interno no servidor");
  }
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
