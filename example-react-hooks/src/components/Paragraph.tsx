import { useContext } from "react";
import { ThemeContext } from "./UseContext";

export default function Paragraph() {
  const theme = useContext(ThemeContext);

  return (
    <p style={theme === "dark" ? {
      color: "#fff",
      background: "#333",
    } : {}}>
      Example using useContext
    </p>
  );
}
