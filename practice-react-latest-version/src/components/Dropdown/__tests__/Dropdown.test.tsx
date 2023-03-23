// Libs
import { render } from "@testing-library/react";
import * as React from "react";
import { Text } from "@chakra-ui/react";

// Components
import Dropdown from "..";
import Button from "components/Button";

const renderMenu = () => <Text>...</Text>;

const children: React.ReactNode = (
  <Button
    label="Edit"
    type="text"
    styles={{
      _hover: {
        bgColor: "gray.200",
      },
      width: "full",
      justifyContent: "space-between",
      borderRadius: "0",
      color: "blue.300",
    }}
  />
);

const props = {
  renderMenu,
  children,
};

describe("Dropdown Component", () => {
  test("Should match snapshoot for Dropdown", () => {
    const dom = render(<Dropdown {...props} />);

    expect(dom).toMatchSnapshot();
  });
});
