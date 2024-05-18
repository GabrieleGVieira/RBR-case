import axios from "axios";
import corsMiddleware from "./cors";

export default async function getEmployees(filter: {}) {
  try {
    const response = await axios.get("http://localhost:3000/api/employees", filter);
    console.log(response)
    return response.data;
  } catch (error) {
    console.error("Error fetching employees:", error);
    return error;
  }
}
