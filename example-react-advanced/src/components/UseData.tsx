import { useEffect, useState } from "react";

export default function useData(selectData: any) {
  const [data, setData] = useState<any>("");

  useEffect(() => {
    setData(selectData());
  }, [])

  return data;
}
