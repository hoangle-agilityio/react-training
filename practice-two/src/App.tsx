import { useEffect, useState } from "react";
import "./App.css";
import Button from "./components/Button";
import User from "./core/interfaces/user";
import { getAllUsers } from "./services";

export default function App(): JSX.Element {
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
    <div className="app">
      <h1 className="app__heading">User Management</h1>
      <section>
        <table className="user-list">
          <thead>
            <tr>
              <th className="list-head">User Id</th>
              <th className="list-head">Name</th>
              <th className="list-head">Email</th>
              <th className="list-head">Action</th>
            </tr>
          </thead>
          <tbody>
            {userList.length === 0 ? (
              <tr>
                <td className="empty-item">No data found!</td>
              </tr>
            ) : (
              <>
                {userList.map(user => (
                  <tr key={user.id}>
                    <td className="list-item">{user.id}</td>
                    <td className="list-item">{user.name}</td>
                    <td className="list-item">{user.email}</td>
                    <td className="list-item">
                      <Button
                        buttonName="Edit"
                        type="edit"
                      />

                      <Button
                        buttonName="Delete"
                        type="delete"
                      />
                    </td>
                  </tr>
                ))}
              </>
            )}
          </tbody>
        </table>
      </section>
    </div>
  );
}
