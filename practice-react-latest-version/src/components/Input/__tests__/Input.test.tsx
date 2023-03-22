import { fireEvent, render } from "@testing-library/react";
import * as React from "react";
import Input from "..";
import { SearchIcon } from "@chakra-ui/icons";

const props = {
  label: "Name",
  name: "name",
  "aria-label": "Name",
};

describe("Input Component", () => {
  test("Should match snapshoot for Input", () => {
    const dom = render(<Input {...props} />);

    expect(dom).toMatchSnapshot();
  });

  test("Should match snapshoot for Textarea", () => {
    const dom = render(<Input {...props} isTextArea={true} />);

    expect(dom).toMatchSnapshot();
  });

  test("Should match snapshoot for Input with icon", () => {
    const dom = render(<Input {...props} icon={<SearchIcon />} />);

    expect(dom).toMatchSnapshot();
  });

  test("Should match snapshoot for Input with error", () => {
    const dom = render(<Input {...props} error="This is an error." />);

    expect(dom).toMatchSnapshot();
  });

  test("Should handle onChange event of Input", () => {
    const { getByLabelText } = render(<Input {...props} />);
    const input = getByLabelText("Name") as HTMLInputElement;
    const value = "test input component";

    fireEvent.change(input, { target: { value } });
    expect(input.value).toBe(value);
  });

  test("Should handle onChange event of Textarea", () => {
    const { getByLabelText } = render(<Input {...props} isTextArea={true} />);
    const input = getByLabelText("Name") as HTMLInputElement;
    const value = "test textarea component";

    fireEvent.change(input, { target: { value } });
    expect(input.value).toBe(value);
  });
});
