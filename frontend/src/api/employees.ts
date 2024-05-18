import axios from "axios";

export async function getEmployees(filter: {}) {
  try {
    const response = await axios.get("http://localhost:3000/api/employees", {
      params: filter,
    });
    return response.data;
  } catch (error: any) {
    console.error("Error fetching employees:", error.response.data);
    throw error.response.data.error;
  }
}

export async function deleteEmployee(id: string) {
  try {
    await axios.delete("http://localhost:3000/api/employees/" + id);
  } catch (error: any) {
    console.error("Error delete employee:", error.response.data);
    throw error.response.data.error;
  }
}


export async function updateEmployee(id: string, updateData: {}) {
  try {
    await axios.put("http://localhost:3000/api/employees/" + id, updateData);
  } catch (error: any) {
    console.error("Error while update employee:", error.response.data);
    throw error.response.data.error;
  }
}


export async function createEmployee(newEmployee: {}) {
  try {
    await axios.post("http://localhost:3000/api/employees/", newEmployee);
  } catch (error: any) {
    console.error("Error while create employee:", error.response.data);
    throw error.response.data.error;
  }
}