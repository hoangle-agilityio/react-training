import { cleanup, fireEvent, render } from "@testing-library/react";
import ModalUser from "..";
import fetchMock from "jest-fetch-mock";

const modalProps = {
  open: true,
  isViewUser: false,
  onEdit: jest.fn(),
  closeModal: jest.fn(),
}

jest.mock("../index");

window.alert = jest.fn();

describe('Modal Component', () => {
  afterEach(cleanup);

  it('should be render modal title as Add User', () => {
    const { container } = render(<ModalUser {...modalProps} />);

    expect(container.querySelector(".modal-title")?.textContent).toBe("Add User");
  });

  it('should be render modal title as Update User', () => {
    const currentUser = {
      id: 1,
      name: "Hoang",
      email: "hoang.le@asnet.com.vn"
    }

    const { container } = render(<ModalUser {...modalProps} currentUser={currentUser} />);

    expect(container.querySelector(".modal-title")?.textContent).toBe("Update User");
  });

  it('should be render modal title as View User', () => {
    const currentUser = {
      id: 1,
      name: "Hoang",
      email: "hoang.le@asnet.com.vn"
    }

    const { container } = render(<ModalUser {...modalProps} isViewUser={true} currentUser={currentUser} />);

    expect(container.querySelector(".modal-title")?.textContent).toBe("View User");
  });

  it('should be click event to go to edit modal', async () => {
    const currentUser = {
      id: 1,
      name: "Hoang",
      email: "hoang.le@asnet.com.vn"
    }

    const { container, getByRole } = render(<ModalUser {...modalProps} isViewUser={true} currentUser={currentUser} />);
    await fireEvent.click(getByRole("button", { name: /Edit/i }));

    console.log(await container.outerHTML);
  });

  it('should be click event to update user', () => {
    const currentUser = {
      id: 1,
      name: "Hoang",
      email: "hoang.le@asnet.com.vn"
    }

    fetchMock.mockResponseOnce(JSON.stringify(currentUser));

    const { getByRole } = render(<ModalUser {...modalProps} currentUser={currentUser} />);
    fireEvent.click(getByRole("button", { name: /Update User/i }));
  });
});
