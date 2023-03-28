import * as React from "react";
import AddCustomerModal from "..";
import { act, fireEvent, render } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ACTION_TYPE } from "constants/variables";

// Create mock for api
jest.mock("services/customers");

const queryClient = new QueryClient();

const props = {
  isOpen: true,
  onClose: jest.fn(),
};

describe("Customer Information Modal", () => {
  test("Should match snapshot for Add Customer", async () => {
    const dom = await act(() => {
      return render(
        <QueryClientProvider client={queryClient}>
          <AddCustomerModal {...props} type={ACTION_TYPE.ADD} />
        </QueryClientProvider>
      );
    });
    expect(dom).toMatchSnapshot();
  });

  test("Should match snapshot for Edit Customer", async () => {
    const dom = await act(() => {
      return render(
        <QueryClientProvider client={queryClient}>
          <AddCustomerModal {...props} id="1" type={ACTION_TYPE.EDIT} />
        </QueryClientProvider>
      );
    });
    expect(dom).toMatchSnapshot();
  });

  test("Should match snapshot for View Customer", async () => {
    const dom = await act(() => {
      return render(
        <QueryClientProvider client={queryClient}>
          <AddCustomerModal {...props} id="1" type={ACTION_TYPE.VIEW} />
        </QueryClientProvider>
      );
    });
    expect(dom).toMatchSnapshot();
  });

  test("Should input name", async () => {
    const dom = await act(() => {
      return render(
        <QueryClientProvider client={queryClient}>
          <AddCustomerModal {...props} type={ACTION_TYPE.ADD} />
        </QueryClientProvider>
      );
    });
    const input = dom.getByLabelText("Name") as HTMLInputElement;
    const value = "Zain Calzoni";

    fireEvent.change(input, { target: { value } });

    expect(input.value).toBe(value);
  });

  test("Should input description", async () => {
    const dom = await act(() => {
      return render(
        <QueryClientProvider client={queryClient}>
          <AddCustomerModal {...props} type={ACTION_TYPE.ADD} />
        </QueryClientProvider>
      );
    });
    const input = dom.getByLabelText("Description") as HTMLInputElement;
    const value = "description";

    fireEvent.change(input, { target: { value } });

    expect(input.value).toBe(value);
  });

  test("Should input rate", async () => {
    const dom = await act(() => {
      return render(
        <QueryClientProvider client={queryClient}>
          <AddCustomerModal {...props} type={ACTION_TYPE.ADD} />
        </QueryClientProvider>
      );
    });
    const input = dom.getByLabelText("Rate") as HTMLInputElement;
    const value = "256";

    fireEvent.change(input, { target: { value } });

    expect(input.value).toBe(value);
  });

  test("Should input balance", async () => {
    const dom = await act(() => {
      return render(
        <QueryClientProvider client={queryClient}>
          <AddCustomerModal {...props} type={ACTION_TYPE.ADD} />
        </QueryClientProvider>
      );
    });
    const input = dom.getByLabelText("Balance") as HTMLInputElement;
    const value = "-256";

    fireEvent.change(input, { target: { value } });

    expect(input.value).toBe(value);
  });

  test("Should input deposit", async () => {
    const dom = await act(() => {
      return render(
        <QueryClientProvider client={queryClient}>
          <AddCustomerModal {...props} type={ACTION_TYPE.ADD} />
        </QueryClientProvider>
      );
    });
    const input = dom.getByLabelText("Deposit") as HTMLInputElement;
    const value = "256";

    fireEvent.change(input, { target: { value } });

    expect(input.value).toBe(value);
  });

  test("Should create customer", async () => {
    const dom = await act(() => {
      return render(
        <QueryClientProvider client={queryClient}>
          <AddCustomerModal {...props} type={ACTION_TYPE.ADD} />
        </QueryClientProvider>
      );
    });
    const button = dom.getByText("Create");

    fireEvent.click(button);
    expect(dom).toMatchSnapshot();
  });
});
