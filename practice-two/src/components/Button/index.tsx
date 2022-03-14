import { memo } from "react";
import "./button.css";

interface ButtonProps {
  buttonName: string;
  className: string;
  onClick?: () => void;
}

function Button({ buttonName, className, onClick }: ButtonProps): JSX.Element {
  return (
    <button className={`btn ${className}`} onClick={onClick}>
      {buttonName}
    </button>
  );
}

export default memo(Button);
