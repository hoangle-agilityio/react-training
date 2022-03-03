import "./button.scss";

interface ButtonProps {
  typeButton: "button" | "submit" | "reset";
  size?: "sm" | "md"| "lg";
  buttonColor: "light" | "info" | "danger";
  customize?: string;
  label: string;
}

export default function Button({ typeButton, size, buttonColor, customize, label }: ButtonProps) {
  const separateClass: string = customize ? customize : "";
  const buttonSize: string = size ? `btn--${size}` : "";

  return (
    <button
      type={typeButton}
      className={`${separateClass} btn btn-${buttonColor} ${buttonSize}`}
    >
      {label}
    </button>
  );
}
