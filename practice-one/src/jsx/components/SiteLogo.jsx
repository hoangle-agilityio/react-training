import React from "react";

export default function SiteLogo({ logo }) {
  return (
    <a href={logo.link} onClick={e => e.preventDefault()}>
      <img src={logo.srcImg} alt={logo.altImg} />
    </a>
  );
}
