import Button from "../index";
import { cleanup, fireEvent, render } from "@testing-library/react";

const buttonProps = {
  buttonName: "Add User",
  type: "success",
}

describe('Button Component', () => {
  afterEach(cleanup);

  it('should be render button correctly', () => {
    const { getByRole } = render(<Button {...buttonProps} />);

    expect(getByRole('button').textContent).toBe('Add User');
  });

  it('should be click event', () => {
    const onClick = jest.fn();
    const { getByText } = render(<Button {...buttonProps} onClick={onClick} />);

    fireEvent.click(getByText('Add User'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
