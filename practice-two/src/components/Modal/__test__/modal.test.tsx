import { cleanup, fireEvent, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ModalUser from "..";

// Create mock for modal
jest.mock("../index");

// Create mock for api
jest.mock("../../../services/index");

window.alert = jest.fn();

const modalProps = {
  open: true,
  isViewUser: false,
  onEdit: jest.fn(),
  closeModal: jest.fn(),
}

const currentUser = {
  id: 1,
  name: "Hoang",
  email: "hoang.le@asnet.com.vn"
}

describe('Modal Component', () => {
  afterEach(cleanup);

  it('should be render modal title as Add User', () => {
    const { container } = render(<ModalUser {...modalProps} />);

    expect(container.querySelector(".modal-title")?.textContent).toBe("Add User");
    expect(container.querySelector(".modal-title")).toMatchSnapshot();
  });

  it('should be render modal title as Update User', () => {
    const { container } = render(<ModalUser {...modalProps} currentUser={currentUser} />);

    expect(container.querySelector(".modal-title")?.textContent).toBe("Update User");
    expect(container.querySelector(".modal-title")).toMatchSnapshot();
  });

  it('should be render modal title as View User', () => {
    const { container } = render(<ModalUser {...modalProps} isViewUser={true} currentUser={currentUser} />);

    expect(container.querySelector(".modal-title")?.textContent).toBe("View User");
    expect(container.querySelector(".modal-title")).toMatchSnapshot();
  });

  it('should be button click event to move to edit modal', () => {
    const { getByRole } = render(<ModalUser {...modalProps} isViewUser={true} currentUser={currentUser} />);
    const button = getByRole("button", { name: /Edit/i });
    const onClick = fireEvent.click(button);

    expect(onClick).toBe(true);
    expect(button).toMatchSnapshot();
  });

  it('should be button click event to update user', () => {
    const { getByRole } = render(<ModalUser {...modalProps} currentUser={currentUser} />);
    const button = getByRole("button", { name: /Update User/i });
    const onClick = fireEvent.click(button);

    expect(onClick).toBe(true);
    expect(button).toMatchSnapshot();
  });

  it('should be button click event to create user', () => {
    const { getByPlaceholderText, getByRole } = render(<ModalUser {...modalProps} />);
    const userName = getByPlaceholderText(/user name/i);
    const userEmail = getByPlaceholderText(/user email/i);
    const button = getByRole("button", { name: /Add User/i });

    userEvent.type(userName, "Hoang Le");
    userEvent.type(userEmail, "hoang.le@gmail.com");

    const onClick = fireEvent.click(button);

    expect(onClick).toBe(true);
    expect(button).toMatchSnapshot();
  });
});
