// Constants
import { API_METHOD, API_URL } from "constants/endpoint";

// Types
import { WithID } from "types/common";
import { Customer } from "types/customer";
import { getAPIHeaders } from "utils/utilities";

// handle response. If response is ok, return json
// Otherwise, throw exception
const handleResponse = (res: Response) => {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error(`${res.status} ${res.statusText}`);
  }
};

// fetch list of customers
export const fetchCustomers = async (
  page: number,
  limit: number,
  search: string,
  order: string
) => {
  const url =
    API_URL +
    `?page=${page}&limit=${limit}&search=${search}&sortBy=name&order=${order}`;

  const res = await fetch(url, getAPIHeaders(API_METHOD.GET));

  // If response is ok, return json
  // Otherwise, throw exception
  return handleResponse(res);
};

// delete customer by id
export const deleteCustomer = async (id: string) => {
  const url = API_URL + `/${id}`;

  const res = await fetch(url, getAPIHeaders(API_METHOD.DELETE));

  // If response is ok, return json
  // Otherwise, throw exception
  return handleResponse(res);
};

// create customer
export const createCustomer = async (input: Customer) => {
  const res = await fetch(API_URL, {
    ...getAPIHeaders(API_METHOD.POST),
    // Send your data in the request body as JSON
    body: JSON.stringify(input),
  });

  // If response is ok, return json
  // Otherwise, throw exception
  return handleResponse(res);
};

// fetch customer by id
export const fetchCustomer = async (id: string) => {
  const url = API_URL + `/${id}`;

  const res = await fetch(url, getAPIHeaders(API_METHOD.GET));

  // If response is ok, return json
  // Otherwise, throw exception
  return handleResponse(res);
};

// update customer by id
export const updateCustomer = async (input: WithID<Customer>) => {
  const url = API_URL + `/${input.id}`;

  const res = await fetch(url, {
    ...getAPIHeaders(API_METHOD.PUT),
    // Send your data in the request body as JSON
    body: JSON.stringify(input),
  });

  // If response is ok, return json
  // Otherwise, throw exception
  return handleResponse(res);
};
