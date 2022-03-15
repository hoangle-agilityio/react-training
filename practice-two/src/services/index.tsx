import { API_BASE_URL } from "../core/constants/api-url";
import User from "../core/interfaces/user";

const API_URL = `${API_BASE_URL}/users`;

export async function getAllUsers(): Promise<User[]> {
  const response: Response = await fetch(API_URL);

  return response.json();
}

export async function addUser(data: Omit<User, "id">): Promise<User> {
  const response: Response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return response.json();
}
