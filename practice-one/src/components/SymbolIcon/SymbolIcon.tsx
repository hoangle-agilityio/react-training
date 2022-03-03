type Icon = "twitter" | "facebook" | "linkedin" | "address" | "phone" | "email";

interface SymbolIconProps {
  width: string;
  height: string;
  icon: Icon;
}

export default function SymbolIcon({ width, height, icon }: SymbolIconProps): JSX.Element {
  return (
    <svg width={width} height={height}>
      <use xlinkHref={`../src/assets/icons/symbols-icon.svg#${icon}`} />
    </svg>
  );
}
