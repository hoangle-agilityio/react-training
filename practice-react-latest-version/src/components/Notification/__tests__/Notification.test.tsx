import { render } from "@testing-library/react";
import * as React from "react";
import Notification from "..";

const props = {
  message: "This is a message.",
};

describe("Notification Component", () => {
  test("Should match snapshoot for Notification Error", () => {
    const dom = render(<Notification {...props} type="error" />);

    expect(dom).toMatchSnapshot();
  });

  test("Should match snapshoot for Notification Success", () => {
    const dom = render(<Notification {...props} type="success" />);

    expect(dom).toMatchSnapshot();
  });

  test("Should match snapshoot for Notification Info", () => {
    const dom = render(<Notification {...props} type="info" />);

    expect(dom).toMatchSnapshot();
  });
});
