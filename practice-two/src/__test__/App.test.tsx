import { cleanup, fireEvent, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

// Create mock for app
jest.mock("../App");

// Create mock for modal
jest.mock("../components/Modal/index");

// Create mock for api
jest.mock("../services/index");

window.confirm = jest.fn(() => true);
window.alert = jest.fn();

describe('App Component', () => {
  afterEach(cleanup);

  it('should take a snapshot', () => {
    const { container } = render(<App />);
    expect(container.querySelector(".app")).toMatchSnapshot();
  });

  it('should be button Add User click event to open modal', () => {
    const { container } = render(<App />);
    const button = container.querySelector(".create-user button");
    const onClick = fireEvent.click(button!);

    expect(onClick).toBe(true);
  });

  it('should be button View User click event to open modal', () => {
    const { container } = render(<App />);
    const button = container.querySelector(".list-item .btn-info");
    const onClick = fireEvent.click(button!);

    expect(onClick).toBe(true);
  });

  it('should be button Edit User click event to open modal', () => {
    const { container } = render(<App />);
    const button = container.querySelector(".list-item .btn-primary");
    const onClick = fireEvent.click(button!);

    expect(onClick).toBe(true);
  });

  it('should be button click event to delete user', () => {
    const { container } = render(<App />);
    const button = container.querySelector(".btn-danger");
    const onClick = fireEvent.click(button!);

    expect(onClick).toBe(true);
  });

  it('should filter username with value entered', () => {
    const { container } = render(<App />);
    const search = container.querySelector("#search");
    
    userEvent.type(search!, "o");

    expect(container.querySelectorAll(".username").length).toBe(2);
  });
});
