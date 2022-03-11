import { memo } from "react";

function ExampleMemo({ onIncrease }: any) {
  console.log("re-render");

  return (
    <>
      <h1>Hello! Example useCallback</h1>
      <button onClick={onIncrease}>Increase</button>
    </>
  );
}

export default memo(ExampleMemo);
