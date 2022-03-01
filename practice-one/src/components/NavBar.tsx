import React from "react";
import { MenuItem } from "./TopNav";

interface NavBarProps {
  menuItems: Array<MenuItem>;
}

export default function NavBar({ menuItems }: NavBarProps): JSX.Element {
  return (
    <>
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
          <button type="submit" className="btn btn-light btn--sm">Subscribe</button>
        </form>
      </nav>
    </>
  );
}
