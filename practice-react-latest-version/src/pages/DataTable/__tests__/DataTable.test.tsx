import * as React from "react";
import App from "..";
import { act, fireEvent, render } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";

// Create mock for app
jest.mock("../index");

// Create mock for api
jest.mock("services/customers");

const queryClient = new QueryClient();

const wrapper = () => (
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);

describe("Data Table Page", () => {
  test("Should match snapshot for Data Table", async () => {
    const dom = await act(() => {
      return render(wrapper());
    });
    expect(dom).toMatchSnapshot();
  });

  test("Should search with the value entered", async () => {
    const dom = await act(() => {
      return render(wrapper());
    });
    const input = dom.getByPlaceholderText("Search...") as HTMLInputElement;
    const value = "description 11";

    fireEvent.change(input, { target: { value } });

    expect(input.value).toBe(value);
    expect(dom).toMatchSnapshot();
  });

  test("Should sort by name", async () => {
    const dom = await act(() => {
      return render(wrapper());
    });

    const name = dom.getByText("Name");

    fireEvent.click(name);
    expect(dom).toMatchSnapshot();
  });

  test("Should click to Add Customer", async () => {
    const dom = await act(() => {
      return render(wrapper());
    });

    const action = dom.getByText("+ Add customer");
    const onClick = fireEvent.click(action);

    expect(onClick).toBe(true);
    expect(dom).toMatchSnapshot();
  });

  test("Should click to show action", async () => {
    const { container } = await act(() => {
      return render(wrapper());
    });

    const action = container.querySelectorAll(
      "button[aria-label='toggle-button']"
    )[0] as HTMLElement;
    const onClick = fireEvent.click(action);

    expect(onClick).toBe(true);
    expect(container).toMatchSnapshot();
  });

  test("Should click to View action", async () => {
    const { container, getAllByText } = await act(() => {
      return render(wrapper());
    });

    const action = container.querySelectorAll(
      "button[aria-label='toggle-button']"
    )[0] as HTMLElement;

    fireEvent.click(action);

    const viewAction = getAllByText("View")[0];
    const onClick = fireEvent.click(viewAction);

    expect(onClick).toBe(true);
  });

  test("Should click to Edit action", async () => {
    const { container, getAllByText } = await act(() => {
      return render(wrapper());
    });

    const action = container.querySelectorAll(
      "button[aria-label='toggle-button']"
    )[0] as HTMLElement;

    fireEvent.click(action);

    const editAction = getAllByText("Edit")[0];
    const onClick = fireEvent.click(editAction);

    expect(onClick).toBe(true);
  });

  test("Should click to Delete action", async () => {
    const { container, getAllByText } = await act(() => {
      return render(wrapper());
    });

    const action = container.querySelectorAll(
      "button[aria-label='toggle-button']"
    )[0] as HTMLElement;

    fireEvent.click(action);

    const deleteAction = getAllByText("Delete")[0];
    const onClick = fireEvent.click(deleteAction);

    expect(onClick).toBe(true);
  });
});
