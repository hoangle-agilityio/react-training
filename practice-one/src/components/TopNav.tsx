import NavBar from "./NavBar";
import SiteLogo from "./SiteLogo";

export type Logo = {
  srcImg: string;
  altImg: string;
  link: string;
}

export type MenuItem = {
  id: number;
  name: string;
  link: string;
}

interface TopNavProps {
  logo: Logo;
  menuItems: Array<MenuItem>;
}

export default function TopNav({ logo, menuItems }: TopNavProps): JSX.Element {
  return (
    <div className="header__wrapper">
      <div className="navbar__logo">
        <SiteLogo logo={logo} />
      </div>

      <NavBar menuItems={menuItems} />
    </div>
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
