// Libs
import { render } from "@testing-library/react";
import * as React from "react";
import { Button, Text } from "@chakra-ui/react";

// Components
import Dropdown from "..";

const renderMenu = () => <Text>...</Text>;

const children: React.ReactNode = (
  <Button
    variant="secondary"
    width="full"
    justifyContent="space-between"
    borderRadius="0"
    color="icon.primary"
  >
    Edit
  </Button>
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
