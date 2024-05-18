import { connect } from "mongoose";

import dotenv from "dotenv";

dotenv.config();

// Conexão com MongoDB
const connectDB = async () => {
  try {
    await connect(process.env.MONGO_URL);
    console.log("Conexão com o MongoDB estabelecida com sucesso");
  } catch (err) {
    console.error("Erro ao conectar ao MongoDB:", err);
  }
};

export default connectDB;
