import { memo } from "react";
import "./button.css";

interface ButtonProps {
  buttonName: string;
  type: string;
  onClick?: () => void;
}

function Button({ buttonName, type, onClick }: ButtonProps): JSX.Element {
  return (
    <button className={`btn btn-${type}`} onClick={onClick}>
      {buttonName}
    </button>
  );
}

export default memo(Button);
