import { useRef, useState } from "react";

export default function ExampleUseRef() {
  const [count, setCount] = useState(180);
  const timeRef = useRef(0);
  const inputRef: React.MutableRefObject<any> = useRef();

  const handleStart = () => {
    timeRef.current = setInterval(() => {
      setCount(prevCount => prevCount - 1);
    }, 1000);

    console.log("Start -> ", timeRef);
  }

  const handleStop = () => {
    console.log("Stop -> ", timeRef);
    clearInterval(timeRef.current);
  }

  const onButtonClick = () => {
    inputRef.current.focus();
    console.log(inputRef.current.value);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <br />
      <input ref={inputRef} type="text" />
      <button onClick={onButtonClick}>Focus to Input</button>
    </div>
  );
}
