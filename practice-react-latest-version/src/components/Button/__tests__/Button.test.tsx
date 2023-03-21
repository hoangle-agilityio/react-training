import { fireEvent, render } from "@testing-library/react";
import * as React from "react";
import Button from "../index";

const props = {
  label: "Shared button",
  onClick: jest.fn(),
};

describe("Button Component", () => {
  test("Should match snapshoot for default Button component", () => {
    const dom = render(<Button {...props} />);

    expect(dom).toMatchSnapshot();
  });

  test("Should display primary button", () => {
    const dom = render(<Button label="Primary Button" type="primary" />);

    expect(dom).toMatchSnapshot();
  });

  test("Should display secondary button", () => {
    const dom = render(<Button label="Secondary Button" type="secondary" />);

    expect(dom).toMatchSnapshot();
  });

  test("Should display button with type is text", () => {
    const dom = render(
      <Button label="Text" type="text" styles={{ color: "blue.200" }} />
    );

    expect(dom).toMatchSnapshot();
  });

  test("Should display disabled button", () => {
    const { getByText } = render(
      <Button {...props} type="primary" disabled={true} />
    );
    const button = getByText("Shared button");

    fireEvent.click(button);
    expect(props.onClick).toHaveBeenCalledTimes(0);
  });

  test("Should handle onClick event", () => {
    const { getByText } = render(<Button {...props} />);
    const button = getByText("Shared button");

    fireEvent.click(button);
    expect(props.onClick).toHaveBeenCalledTimes(1);
  });
});
