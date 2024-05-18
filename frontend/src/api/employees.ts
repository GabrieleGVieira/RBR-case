import axios from "axios";

export async function getEmployees(filter: {}) {
  try {
    const response = await axios.get("http://localhost:3000/api/employees", {
      params: filter,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching employees:", error);
    return error;
  }
}

export async function deleteEmployee(id: string) {
  try {
    await axios.delete("http://localhost:3000/api/employees/" + id);
  } catch (error: any) {
    console.error("Error delete employee:", error);
    return error.error;
  }
}
