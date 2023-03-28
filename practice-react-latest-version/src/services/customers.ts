import { CUSTOMER_ENDPOINT } from "constants/endpoint";
import { Customer } from "types/customer";

export const fetchData = async (
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

export const deleteData = async (id: string) => {
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

export const createData = async (input: Customer) => {
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