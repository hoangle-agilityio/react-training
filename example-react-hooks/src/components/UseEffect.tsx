import { useEffect, useState } from "react";

export default function ExampleEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("effect");
    document.title = `You clicked ${count} times`;
  });

  return (
    console.log("render"),
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
