import { useReducer } from "react";
// 1. Initial state
const initialState = 0;

// 2. Reducer
const reducer = (state: number, action: string): number => {
  switch (action) {
    case "up":
      return state + 1;
    case "down":
      return state - 1;
    default:
      throw new Error("invalid action");
  }
}

export default function ExampleUseReducer() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch("up")}>Up</button>
      <button onClick={() => dispatch("down")}>Down</button>
    </div>
  );
}
