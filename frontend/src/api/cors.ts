import { NextApiRequest, NextApiResponse } from "next";
import Cors from "cors";

// Inicializa o middleware CORS com as opções desejadas
const cors = Cors({
  methods: ["GET", "POST", "PUT", "DELETE"], // Métodos permitidos
  origin: "*", // Origem permitida (mudar para seu domínio em produção)
});

// Helper para executar o middleware e aguardar sua conclusão
function runMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  fn: Function
) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

export default async function corsMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  next: Function
) {
  await runMiddleware(req, res, cors);
  next();
}
