import { connect } from "mongoose";

// Conexão com MongoDB
const connectDB = async () => {
  try {
    await connect(
      "mongodb://rbruser:admin@localhost:27017/"
    );
    console.log("Conexão com o MongoDB estabelecida com sucesso");
  } catch (err) {
    console.error("Erro ao conectar ao MongoDB:", err);
  }
};

export default connectDB;