import { memo, MutableRefObject, useRef, useState } from "react";
import "./modal.css";
import Button from "../../Button";
import { mutate } from "swr";
import { addUser, updateUser } from "../../../services";
import { VALIDATE } from "../../../core/constants/validate";
import User from "../../../core/interfaces/user";
import { MODAL_INFORMATION } from "../../../core/constants/modal-information";
import { API_BASE_URL } from "../../../core/constants/api-url";

interface ModalUserProps {
  open: boolean;
  currentUser?: User;
  isViewUser: boolean;
  onEdit: React.Dispatch<React.SetStateAction<boolean>>;
  closeModal: () => void;
}

const apiUrl: string = `${API_BASE_URL}/users`;

function ModalUser({ open, currentUser, isViewUser, onEdit, closeModal }: ModalUserProps) {
  const [errors, setErrors] = useState<string[]>([]);

  const userNameRef = useRef() as MutableRefObject<HTMLInputElement>;
  const userEmailRef = useRef() as MutableRefObject<HTMLInputElement>;

  let modalTitle: string;

  // Add user data to server
  const handleAddUser = async (userData: Partial<User>): Promise<void> => {
    try {
      await addUser(userData);
      mutate(apiUrl);

      alert("User added successfully!");
    } catch (error) {
      throw new Error(`Get data failed: ${error}`);
    }
  }

  // Update user data to server
  const handleUpdateUser = async (userData: Partial<User>): Promise<void> => {
    try {
      await updateUser(userData);
      mutate(apiUrl);

      alert("User updated successfully!");
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

  if (isViewUser) {
    modalTitle = MODAL_INFORMATION.VIEW;
  } else if (currentUser) {
    modalTitle = MODAL_INFORMATION.EDIT;
  } else {
    modalTitle = MODAL_INFORMATION.ADD;
  }

  return (
    <section>
      <h2 className="modal-title">{modalTitle}</h2>

      {errors.map((error, index) => (
        <p key={index} className="error-msg">{error}</p>
      ))}

      <div className="input-group">
        <label htmlFor="userName">User Name</label>
        <input ref={userNameRef} type="text" readOnly={isViewUser} id="userName" defaultValue={currentUser?.name} />
      </div>
      <div className="input-group">
        <label htmlFor="userEmail">User Email</label>
        <input ref={userEmailRef} type="text" readOnly={isViewUser} id="userEmail" defaultValue={currentUser?.email} />
      </div>
      {isViewUser ?
        <Button
          buttonName="Edit"
          type="primary"
          onClick={() => onEdit(false)}
        /> :
        <Button
          buttonName={currentUser ? MODAL_INFORMATION.EDIT : MODAL_INFORMATION.ADD}
          type="success"
          onClick={() => handleSubmitUser(currentUser)}
        />
      }

      <Button
        buttonName={MODAL_INFORMATION.CANCEL}
        type="secondary"
        onClick={closeModal}
      />
    </section>
  );
}

export default memo(ModalUser);
