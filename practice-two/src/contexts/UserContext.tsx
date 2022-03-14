import { createContext, ReactNode, useEffect, useState } from "react";
import User from "../core/interfaces/user";
import { getAllUsers } from "../services";

interface UserContextProps {
  userList: User[];
}

interface UserProviderProps {
  children: ReactNode;
}

// Create context
export const UserContext = createContext({} as UserContextProps);

export default function UserProvider({ children }: UserProviderProps): JSX.Element {
  const [userList, setUserList] = useState<User[]>([]);

  // Get all users
  const handleGetUsers = async (): Promise<void> => {
    try {
      setUserList(await getAllUsers());
    } catch (error) {
      throw new Error(`Get data failed: ${error}`);
    }
  };

  // Use useEffect avoid to call function repeatedly
  useEffect(() => {
    handleGetUsers();
  }, []);


  return (
    <UserContext.Provider value={{ userList }}>
      {children}
    </UserContext.Provider>
  );
}
