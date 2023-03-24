import { CUSTOMER_ENDPOINT } from "constants/endpoint";

export const getCustomers = async (page: number, limit: number) => {
  const url =
    process.env.REACT_APP_API_ENDPOINT +
    CUSTOMER_ENDPOINT +
    `?page=${page}&limit=${limit}`;

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
