import express from "express";
import connectDB from "./mongodb/db.js";
const app = express();
const port = 3000;

// Conexão com MongoDB
connectDB()

app.get("/", (req, res) => {
  res.send("Olá, mundo!");
});

app.listen(port, () => {
  console.log(`Servidor Express rodando em http://localhost:${port}`);
});

