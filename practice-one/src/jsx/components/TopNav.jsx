import React from "react";
import "../../scss/sections/nav.scss";
import NavBar from "./NavBar";
import SiteLogo from "./SiteLogo";

export default function TopNav({ logo, menuItems }) {
  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="navbar__logo">
          <SiteLogo logo={logo} />
        </div>

        <NavBar menuItems={menuItems} />
      </div>
    </header>
  );
}

TopNav.defaultProps = {
  logo: {
    srcImg: "http://localhost:3000/src/assets/images/figma-logo.svg",
    altImg: "Figma Land",
    link: "#!"
  },
  menuItems: [
    { id: 1, name: "Home", link: "#!" },
    { id: 2, name: "Product", link: "#!" },
    { id: 3, name: "Pricing", link: "#!" },
    { id: 4, name: "About", link: "#!" },
    { id: 5, name: "Contact", link: "#!" },
  ]
}
