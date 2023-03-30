// regex value
export const regexValue = (value: string, regex: RegExp) => {
  return regex.exec(value);
};

// generate random customer id with 10 digits
export const generateRandomCustomerId = () => {
  return Math.floor(Math.random() * 10000000000);
};

// reduce the number of times the application has to handle continuous events
export const debounce = (func: (...args: string[]) => void, wait: number) => {
  let timeout: NodeJS.Timeout | null;

  return (...args: string[]) => {
    const latest = () => {
      timeout = null;
      func(...args);
    };

    clearTimeout(timeout as NodeJS.Timeout);

    timeout = setTimeout(latest, wait);
  };
};

// convert data to object
export const convertDataToObject = (data: string) => {
  return (
    !!data && {
      value: data,
      label: data,
    }
  );
};

// get api headers
export const getAPIHeaders = (method: string) => ({
  method,
  headers: { "content-type": "application/json" },
});
