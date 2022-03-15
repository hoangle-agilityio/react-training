import { MutableRefObject, useEffect, useRef, useState } from "react";
import "./App.css";
import Button from "./components/Button";
import User from "./core/interfaces/user";
import { addUser, getAllUsers } from "./services";
import Modal from "react-modal";
import { MODAL_INFORMATION } from "./core/constants/modal-information";
import { VALIDATE } from "./core/constants/validate";

export default function App(): JSX.Element {
  const [userList, setUserList] = useState<User[]>([]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);

  const userNameRef = useRef() as MutableRefObject<HTMLInputElement>;
  const userEmailRef = useRef() as MutableRefObject<HTMLInputElement>;

  const handleOpenModal = (): void => setIsOpenModal(true);
  const handleCloseModal = (): void => setIsOpenModal(false);

  // Get all users
  const handleGetUsers = async (): Promise<void> => {
    try {
      setUserList(await getAllUsers());
    } catch (error) {
      throw new Error(`Get data failed: ${error}`);
    }
  };

  // Add user data to server
  const handleAddUser = async (userData: Omit<User, "id">): Promise<void> => {
    try {
      await addUser(userData);
      alert("Recipe added successfully!");

      // Get all user after add data
      handleGetUsers();
    } catch (error) {
      throw new Error(`Get data failed: ${error}`);
    }
  }

  const handleSubmit = (): void => {
    const userData: Omit<User, "id"> = {
      name: userNameRef.current.value,
      email: userEmailRef.current.value,
    }
    const errors = validate(userData);

    if (errors.length > 0) {
      setErrors(errors);
      return;
    }

    handleAddUser(userData);

    // Close modal after add data
    handleCloseModal();
  }

  // Validate for user data
  const validate = (user: Omit<User, "id">): string[] => {
    const errors: string[] = [];

    if (user.name === VALIDATE.EMPTY_VALUE || user.email === VALIDATE.EMPTY_VALUE) {
      errors.push(VALIDATE.MESSAGE_FIELD_REQUIRED);
    }

    if (user.email && !VALIDATE.REGEX_EMAIL.test(user.email)) {
      errors.push(VALIDATE.MESSAGE_EMAIL_FORMAT);
    }

    return errors;
  }

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
          onClick={handleOpenModal}
        />
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
                        type="primary"
                      />

                      <Button
                        buttonName="Delete"
                        type="danger"
                      />
                    </td>
                  </tr>
                ))}
              </>
            )}
          </tbody>
        </table>
      </section>
      <section>
        <Modal isOpen={isOpenModal} className="user-modal" ariaHideApp={false}>
          <section>
            <h2 className="modal-title">{MODAL_INFORMATION.ADD}</h2>

            {errors.map((error, index) => (
              <p key={index} className="error-msg">{error}</p>
            ))}

            <div className="input-group">
              <label htmlFor="userName">User Name</label>
              <input ref={userNameRef} type="text" id="userName" />
            </div>
            <div className="input-group">
              <label htmlFor="userEmail">User Email</label>
              <input ref={userEmailRef} type="text" id="userEmail" />
            </div>
            <Button
              buttonName={MODAL_INFORMATION.ADD}
              type="success"
              onClick={handleSubmit}
            />
            <Button
              buttonName={MODAL_INFORMATION.CANCEL}
              type="secondary"
              onClick={handleCloseModal}
            />
          </section>
        </Modal>
      </section>
    </div>
  );
}
