import * as React from "react";
import App from "..";
import { act, fireEvent, render } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";

const mockData = [
  {
    customerId: 1234567890,
    name: "name 1",
    description: "description 11",
    status: "status 1",
    rate: 33,
    balance: 11,
    deposit: 37,
    id: "1",
  },
  {
    customerId: 2234567890,
    name: "name 2",
    description: "description 2",
    status: "status 2",
    rate: 40,
    balance: 42,
    deposit: 18,
    id: "2",
  },
  {
    customerId: 3234567890,
    name: "name 3",
    description: "description 3",
    status: "status 3",
    rate: 62,
    balance: 21,
    deposit: 12,
    id: "3",
  },
];

// Create mock for api
jest.mock("services/apis/customers", () => {
  return {
    fetchData: jest
      .fn()
      .mockImplementationOnce(() => Promise.resolve(mockData)),
  };
});

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
