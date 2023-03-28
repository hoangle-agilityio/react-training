export type WithID<T> = T & {
  id: string;
};

export type OptionType = {
  value: string;
  label: string;
};

export type StatusType = "Open" | "Paid" | "Due" | "Inactive" | "Others";
