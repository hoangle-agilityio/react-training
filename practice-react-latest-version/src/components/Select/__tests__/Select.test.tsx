import { fireEvent, render } from "@testing-library/react";
import * as React from "react";
import Select from "..";

const props = {
  label: "Food",
  name: "food",
};

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

describe("Select Component", () => {
  test("Should match snapshoot for Select", () => {
    const dom = render(<Select {...props} options={options} />);

    expect(dom).toMatchSnapshot();
  });

  test("Should match snapshoot for Select with error", () => {
    const dom = render(
      <Select {...props} options={options} error="This is an error." />
    );

    expect(dom).toMatchSnapshot();
  });

  test("Should handle onChange event of Select", () => {
    const onChange = jest.fn();
    const { container, getByText } = render(
      <Select {...props} options={options} onChange={onChange} />
    );
    const select = container.querySelector("input") as HTMLInputElement;

    fireEvent.focus(select);
    fireEvent.keyDown(select, { key: "ArrowDown" });
    fireEvent.click(getByText("Chocolate"));
    expect(onChange).toBeCalledTimes(1);
  });
});
