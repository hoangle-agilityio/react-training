// Libs
import { render } from "@testing-library/react";
import * as React from "react";
import { Text } from "@chakra-ui/react";

// Components
import Modal from "..";

const children: React.ReactNode = (
  <Text fontSize="base" margin="20px 0" data-testid="modal-content">
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  </Text>
);

const props = {
  title: "Add New Customer",
  onClose: jest.fn(),
  isOpen: true,
  children,
};

describe("Modal Component", () => {
  test("Should match snapshoot for Modal", () => {
    const dom = render(<Modal {...props} />);

    expect(dom).toMatchSnapshot();
  });

  test("Should match snapshoot for Modal with size xs", () => {
    const dom = render(<Modal {...props} size="xs" />);

    expect(dom).toMatchSnapshot();
  });

  test("Should match snapshoot for Modal with size md", () => {
    const dom = render(<Modal {...props} size="md" />);

    expect(dom).toMatchSnapshot();
  });

  test("Should match snapshoot for Modal with size sm", () => {
    const dom = render(<Modal {...props} size="sm" />);

    expect(dom).toMatchSnapshot();
  });

  test("Should match snapshoot for Modal with size lg", () => {
    const dom = render(<Modal {...props} size="lg" />);

    expect(dom).toMatchSnapshot();
  });

  test("Should match snapshoot for Modal with size xl", () => {
    const dom = render(<Modal {...props} size="xl" />);

    expect(dom).toMatchSnapshot();
  });

  test("Should match snapshoot for Modal with size full", () => {
    const dom = render(<Modal {...props} size="full" />);

    expect(dom).toMatchSnapshot();
  });

  test("Doesn't render modal if prop isOpen is false", () => {
    const dom = render(<Modal {...props} isOpen={false} />);

    expect(dom.findAllByTestId("modal-content")).toMatchObject({});
  });
});
