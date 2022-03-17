import { memo, MutableRefObject, useRef, useState } from "react";
import Modal from "react-modal";
import User from "../../core/interfaces/user";
import { addUser, updateUser } from "../../services";
import { MODAL_INFORMATION } from "../../core/constants/modal-information";
import { VALIDATE } from "../../core/constants/validate";
import Button from "../Button";
import "./modal.css";

interface ModalUserProps {
  open: boolean;
  currentUser: User | undefined;
  userList: User[];
  onSuccess: React.Dispatch<React.SetStateAction<User[]>>;
  closeModal: () => void;
}

function ModalUser({ open, currentUser, userList, onSuccess, closeModal }: ModalUserProps) {
  const [errors, setErrors] = useState<string[]>([]);

  const userNameRef = useRef() as MutableRefObject<HTMLInputElement>;
  const userEmailRef = useRef() as MutableRefObject<HTMLInputElement>;

  // Add user data to server
  const handleAddUser = async (userData: Partial<User>): Promise<void> => {
    try {
      const result: User = await addUser(userData);
      alert("User added successfully!");

      // Get all user after add data
      onSuccess([
        ...userList,
        result
      ]);
    } catch (error) {
      throw new Error(`Get data failed: ${error}`);
    }
  }

  // Update user data to server
  const handleUpdateUser = async (userData: Partial<User>): Promise<void> => {
    try {
      const result: User = await updateUser(userData);
      alert("User updated successfully!");

      // Copy user list and find index of user
      const users: User[] = [...userList];
      const index: number = userList.findIndex(data => {
        return data.id === result.id;
      });

      // Update array after editing
      users[index] = result;
      onSuccess(users);
    } catch (error) {
      throw new Error(`Get data failed: ${error}`);
    }
  }

  const handleSubmitUser = (currentUser: User | undefined): void => {
    const userData: Partial<User> = {
      name: userNameRef.current.value,
      email: userEmailRef.current.value,
    };

    const errors = validate(userData);

    if (errors.length > 0) {
      setErrors(errors);
      return;
    }

    if (currentUser) {
      userData.id = currentUser.id;
      handleUpdateUser(userData);
    } else {
      handleAddUser(userData);
    }

    // Close modal after add data
    closeModal();
  }

  // Validate for user data
  const validate = (user: Partial<User>): string[] => {
    const errors: string[] = [];

    if (user.name === VALIDATE.EMPTY_VALUE || user.email === VALIDATE.EMPTY_VALUE) {
      errors.push(VALIDATE.MESSAGE_FIELD_REQUIRED);
    }

    if (user.email && !VALIDATE.REGEX_EMAIL.test(user.email)) {
      errors.push(VALIDATE.MESSAGE_EMAIL_FORMAT);
    }

    return errors;
  }

  return (
    <section>
      <Modal isOpen={open} className="user-modal" ariaHideApp={false}>
        <section>
          <h2 className="modal-title">{currentUser ? MODAL_INFORMATION.EDIT : MODAL_INFORMATION.ADD}</h2>

          {errors.map((error, index) => (
            <p key={index} className="error-msg">{error}</p>
          ))}

          <div className="input-group">
            <label htmlFor="userName">User Name</label>
            <input ref={userNameRef} type="text" id="userName" defaultValue={currentUser?.name} />
          </div>
          <div className="input-group">
            <label htmlFor="userEmail">User Email</label>
            <input ref={userEmailRef} type="text" id="userEmail" defaultValue={currentUser?.email} />
          </div>
          <Button
            buttonName={currentUser ? MODAL_INFORMATION.EDIT : MODAL_INFORMATION.ADD}
            type="success"
            onClick={() => handleSubmitUser(currentUser)}
          />
          <Button
            buttonName={MODAL_INFORMATION.CANCEL}
            type="secondary"
            onClick={closeModal}
          />
        </section>
      </Modal>
    </section>
  );
}

export default memo(ModalUser);
