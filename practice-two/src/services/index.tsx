import { API_BASE_URL } from "../core/constants/api-url";
import User from "../core/interfaces/user";

export async function getAllUsers(): Promise<User[]> {
  const response: Response = await fetch(`${API_BASE_URL}/users`);

  return response.json();
}
