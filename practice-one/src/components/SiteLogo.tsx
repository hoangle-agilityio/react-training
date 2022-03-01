import React from "react";
import { Logo } from "./TopNav";

interface SiteLogoProps {
  logo: Logo;
}

export default function SiteLogo({ logo }: SiteLogoProps) {
  return (
    <a href={logo.link} onClick={e => e.preventDefault()}>
      <img src={logo.srcImg} alt={logo.altImg} />
    </a>
  );
}
