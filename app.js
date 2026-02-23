import express from "express";
import init from "./services/init.js";

const app = express();

// Renderizar arquivos
app.set("view engine", "ejs");

// Pasta estática
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/convert-file", async (req, res) => {
  try {
    await init();
    res.redirect("/");
  } catch (err) {
    console.error(err);
    res.redirect("/");
  }
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
