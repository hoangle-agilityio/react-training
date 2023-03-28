import * as React from "react";
import App from "..";
import { act, fireEvent, render } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";

// Create mock for api
jest.mock("services/customers");

const queryClient = new QueryClient();

describe("Data Table Page", () => {
  test("Should match snapshot for Data Table", async () => {
    const dom = await act(() => {
      return render(
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      );
    });
    expect(dom).toMatchSnapshot();
  });

  test("Should search with the value entered", async () => {
    const dom = await act(() => {
      return render(
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      );
    });
    const input = dom.getByPlaceholderText("Search...") as HTMLInputElement;
    const value = "description 11";

    fireEvent.change(input, { target: { value } });

    expect(input.value).toBe(value);
    expect(dom).toMatchSnapshot();
  });

  test("Should sort by name", async () => {
    const dom = await act(() => {
      return render(
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      );
    });

    const name = dom.getByText("Name");

    fireEvent.click(name);
    expect(dom).toMatchSnapshot();
  });
});
