export const customerDataTableHeader = [
  {
    name: "Description",
    width: "320px",
    alignLeft: true,
  },
  {
    name: "Status",
    width: "70px",
    alignLeft: true,
  },
  {
    name: "Rate",
    width: "100px",
    alignLeft: false,
  },
  {
    name: "Balance",
    width: "100px",
    alignLeft: false,
  },
  {
    name: "Deposit",
    width: "100px",
    alignLeft: false,
  },
];

export const PAGE_LIMIT = 20;

export const MAX_LENGTH = 255;

export const sortOrders = ["", "asc", "desc"];

export enum SORT_ORDER {
  NONE = "",
  SORT_ASC = "asc",
  SORT_DESC = "desc",
}

export const ACTION_TYPE = {
  ADD: "add",
  EDIT: "edit",
  VIEW: "view",
};

export const statusOptions = [
  { label: "Open", value: "Open" },
  { label: "Paid", value: "Paid" },
  { label: "Due", value: "Due" },
  { label: "Inactive", value: "Inactive" },
];
