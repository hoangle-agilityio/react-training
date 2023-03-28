// Constants
import { CUSTOMER_ENDPOINT } from "constants/endpoint";

// Types
import { WithID } from "types/common";
import { Customer } from "types/customer";

// fetch list of customers
export const fetchCustomers = async (
  page: number,
  limit: number,
  search: string,
  order: string
) => {
  const url =
    process.env.REACT_APP_API_ENDPOINT +
    CUSTOMER_ENDPOINT +
    `?page=${page}&limit=${limit}&search=${search}&sortBy=name&order=${order}`;

  const res = await fetch(url, {
    method: "GET",
    headers: { "content-type": "application/json" },
  });

  if (res.ok) {
    return res.json();
  } else {
    throw new Error(`${res.status} ${res.statusText}`);
  }
};

// delete customer by id
export const deleteCustomer = async (id: string) => {
  const url = process.env.REACT_APP_API_ENDPOINT + CUSTOMER_ENDPOINT + `/${id}`;

  const res = await fetch(url, {
    method: "Delete",
    headers: { "content-type": "application/json" },
  });

  if (res.ok) {
    return res.json();
  } else {
    throw new Error(`${res.status} ${res.statusText}`);
  }
};

// create customer
export const createCustomer = async (input: Customer) => {
  const url = process.env.REACT_APP_API_ENDPOINT + CUSTOMER_ENDPOINT;

  const res = await fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json" },
    // Send your data in the request body as JSON
    body: JSON.stringify(input),
  });

  if (res.ok) {
    return res.json();
  } else {
    throw new Error(`${res.status} ${res.statusText}`);
  }
};

// fetch customer by id
export const fetchCustomer = async (id: string) => {
  const url = process.env.REACT_APP_API_ENDPOINT + CUSTOMER_ENDPOINT + `/${id}`;

  const res = await fetch(url, {
    method: "GET",
    headers: { "content-type": "application/json" },
  });

  if (res.ok) {
    return res.json();
  } else {
    throw new Error(`${res.status} ${res.statusText}`);
  }
};

// update customer by id
export const updateCustomer = async (input: WithID<Customer>) => {
  const url =
    process.env.REACT_APP_API_ENDPOINT + CUSTOMER_ENDPOINT + `/${input.id}`;

  const res = await fetch(url, {
    method: "PUT",
    headers: { "content-type": "application/json" },
    // Send your data in the request body as JSON
    body: JSON.stringify(input),
  });

  if (res.ok) {
    return res.json();
  } else {
    throw new Error(`${res.status} ${res.statusText}`);
  }
};
