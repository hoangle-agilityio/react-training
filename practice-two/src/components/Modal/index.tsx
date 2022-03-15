import { memo, MutableRefObject, useRef, useState } from "react";
import Modal from "react-modal";
import User from "../../core/interfaces/user";
import { addUser, updateUser } from "../../services";
import { MODAL_INFORMATION } from "../../core/constants/modal-information";
import { VALIDATE } from "../../core/constants/validate";
import Button from "../Button";

interface ModalUserProps {
  isOpenModal: boolean;
  currentUser: User | undefined;
  handleGetUsers: () => Promise<void>;
  handleCloseModal: () => void;
}

function ModalUser({ isOpenModal, currentUser, handleGetUsers ,handleCloseModal }: ModalUserProps) {
  const [errors, setErrors] = useState<string[]>([]);

  const userNameRef = useRef() as MutableRefObject<HTMLInputElement>;
  const userEmailRef = useRef() as MutableRefObject<HTMLInputElement>;

  // Add user data to server
  const handleAddUser = async (userData: Omit<User, "id">): Promise<void> => {
    try {
      await addUser(userData);
      alert("User added successfully!");

      // Get all user after add data
      handleGetUsers();
    } catch (error) {
      throw new Error(`Get data failed: ${error}`);
    }
  }

  // Update user data to server
  const handleUpdateUser = async (userData: User): Promise<void> => {
    try {
      await updateUser(userData);
      alert("User updated successfully!");

      // Get all user after update data
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

  const handleUpdate = (id: number): void => {
    const userData: User = {
      id,
      name: userNameRef.current.value,
      email: userEmailRef.current.value,
    }
    const errors = validate(userData);

    if (errors.length > 0) {
      setErrors(errors);
      return;
    }

    handleUpdateUser(userData);

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

  return (
    <section>
      <Modal isOpen={isOpenModal} className="user-modal" ariaHideApp={false}>
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
            onClick={currentUser ? () => handleUpdate(currentUser.id) : handleSubmit}
          />
          <Button
            buttonName={MODAL_INFORMATION.CANCEL}
            type="secondary"
            onClick={handleCloseModal}
          />
        </section>
      </Modal>
    </section>
  );
}

export default memo(ModalUser);
