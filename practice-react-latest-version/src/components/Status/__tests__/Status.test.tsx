import { render } from "@testing-library/react";
import * as React from "react";
import Status from "..";

const props = {
  label: "Status",
  styles: {
    bgColor: "icon.info",
    color: "brand.100",
  },
};

describe("Status Component", () => {
  test("Should match snapshoot for Status base", () => {
    const dom = render(<Status {...props} type="Others" />);

    expect(dom).toMatchSnapshot();
  });

  test("Should match snapshoot for Status Open", () => {
    const dom = render(<Status type="Open" />);

    expect(dom).toMatchSnapshot();
  });

  test("Should match snapshoot for Status Paid", () => {
    const dom = render(<Status type="Paid" />);

    expect(dom).toMatchSnapshot();
  });

  test("Should match snapshoot for Status Due", () => {
    const dom = render(<Status type="Due" />);

    expect(dom).toMatchSnapshot();
  });

  test("Should match snapshoot for Status Inactive", () => {
    const dom = render(<Status type="Inactive" />);

    expect(dom).toMatchSnapshot();
  });
});
