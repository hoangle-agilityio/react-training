interface ButtonProps {
  typeButton: "button" | "submit" | "reset";
  size: "sm" | "md"| "lg";
  buttonColor: "light" | "info" | "danger";
  customize?: string;
  label: string;
}

export default function Button({ typeButton, size, buttonColor, customize, label }: ButtonProps) {
  const separateClass = customize ? customize : "";

  return (
    <button
      type={typeButton}
      className={`${separateClass} btn btn-${buttonColor} btn--${size}`}
    >
      {label}
    </button>
  );
}
