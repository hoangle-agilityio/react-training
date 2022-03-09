import { useCallback, useState } from "react";
import ExampleMemo from "./Memo";

export default function ExampleUseCallback() {
  const [count, setCount] = useState(0);

  const handleIncrease = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  return (
    <div>
      <ExampleMemo onIncrease={handleIncrease} />
      <h2>{count}</h2>
    </div>
  );
}
