import Button from "../button/Button";
import "./nav.scss";

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
        <a href={logo.link} onClick={e => e.preventDefault()}>
          <img src={logo.srcImg} alt={logo.altImg} />
        </a>
      </div>

      <input type="checkbox" className="toggle-checkbox" />
      <span className="toggle-icon" />
      <nav className="navbar__mobile-menu">
        <ul>
          {menuItems.map(item => (
            <li key={item.id} className="mobile-menu-item">
              <a href={item.link} onClick={e => e.preventDefault()} className="mobile-menu-link font--sm">{item.name}</a>
            </li>
          ))}
        </ul>
      </nav>

      <nav className="navbar__menu">
        <ul>
          {menuItems.map(item => (
            <li key={item.id} className="menu-item">
              <a href={item.link} onClick={e => e.preventDefault()} className="menu-link font--sm">{item.name}</a>
            </li>
          ))}
        </ul>
        <form className="menu__form">
          <input type="email" placeholder="Your Email" name="your-email" className="form__email" />
          <Button typeButton="submit" size="sm" buttonColor="light" label="Subscribe" />
        </form>
      </nav>
    </div>
  );
}

TopNav.defaultProps = {
  logo: {
    srcImg: "/src/assets/images/figma-logo.svg",
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
