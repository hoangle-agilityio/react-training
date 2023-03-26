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

export const sortOrders = ["", "asc", "desc"];

export enum SORT_ORDER {
  NONE = "",
  SORT_ASC = "asc",
  SORT_DESC = "desc",
}
