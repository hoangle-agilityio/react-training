import { CUSTOMER_ENDPOINT } from "constants/endpoint";

export const fetchData = async (
  page: number,
  limit: number,
  filter: string
) => {
  const url =
    process.env.REACT_APP_API_ENDPOINT +
    CUSTOMER_ENDPOINT +
    `?page=${page}&limit=${limit}&filter=${filter}`;

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
