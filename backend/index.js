import express from "express";
import connectDB from "./mongodb/db.js";
const app = express();
const port = 3000;
import routes from "./routes/index.js";

// Conexão com MongoDB
connectDB()

app.use(express.json());
app.use(routes);


// app.listen(port, () => {
//   console.log(`Servidor Express rodando em http://localhost:${port}`);
// });

export default app;
