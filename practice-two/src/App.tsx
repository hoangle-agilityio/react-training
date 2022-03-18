import { useEffect, useState } from "react";
import "./App.css";
import Button from "./components/Button";
import ModalUser from "./components/Modal";
import { searching } from "./core/helpers/search-helper";
import User from "./core/interfaces/user";
import { deleteUser, getAllUsers } from "./services";

export default function App(): JSX.Element {
  const [users, setUsers] = useState<User[]>([]);
  const [currentUser, setCurrentUser] = useState<User>();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isViewUser, setIsViewUser] = useState(false);

  const handleOpenModal = (): void => setIsOpenModal(true);
  const handleCloseModal = (): void => setIsOpenModal(false);

  const openModalUser = (user?: User, isView: boolean = false) => {
    setIsViewUser(isView);
    setCurrentUser(user);
    handleOpenModal();
  }

  // Get all users
  const handleGetUsers = async (): Promise<void> => {
    try {
      setUsers(await getAllUsers());
    } catch (error) {
      throw new Error(`Get data failed: ${error}`);
    }
  };

  // Delete user when click to button delete
  const handleDeleteUser = async (user: User): Promise<void> => {
    if (confirm("Are you sure to delete this user?")) {
      try {
        await deleteUser(user.id);

        // Find index of user
        const index = users.indexOf(user);

        // If index exists, remove that index in array.
        // After that, set state user list after remove index
        if (index > -1) {
          users.splice(index, 1);
          setUsers([...users]);
        }

        alert("User deleted successfully!");
      } catch (error) {
        throw new Error(`Delete data failed: ${error}`);
      }
    }
  }

  // Filter user list by searchTerm
  const searchResult = users.filter(user => {
    return searching(user, searchTerm);
  });

  // Use useEffect avoid to call function repeatedly
  useEffect(() => {
    handleGetUsers();
  }, []);

  return (
    <div className="app">
      <h1 className="app__heading">User Management</h1>
      <section className="create-user">
        <Button
          buttonName="Add User"
          type="success"
          onClick={() => openModalUser(undefined)}
        />
      </section>
      <section className="search-user">
        <label htmlFor="search">Search:</label>
        <input type="text" id="search" onChange={event => setSearchTerm(event.target.value)} />
      </section>
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
            {searchResult.length === 0 ? (
              <tr>
                <td className="empty-item">No data found!</td>
              </tr>
            ) : (
              <>
                {searchResult.map(user => (
                  <tr key={user.id}>
                    <td className="list-item">{user.id}</td>
                    <td className="list-item">{user.name}</td>
                    <td className="list-item">{user.email}</td>
                    <td className="list-item">
                      <Button
                        buttonName="View"
                        type="info"
                        onClick={() => openModalUser(user, true)}
                      />

                      <Button
                        buttonName="Edit"
                        type="primary"
                        onClick={() => openModalUser(user)}
                      />

                      <Button
                        buttonName="Delete"
                        type="danger"
                        onClick={() => handleDeleteUser(user)}
                      />
                    </td>
                  </tr>
                ))}
              </>
            )}
          </tbody>
        </table>
      </section>
      <ModalUser
        open={isOpenModal}
        currentUser={currentUser}
        users={users}
        isViewUser={isViewUser}
        onEdit={setIsViewUser}
        onSuccess={setUsers}
        closeModal={handleCloseModal}
      />
    </div>
  );
}
