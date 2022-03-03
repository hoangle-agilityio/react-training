import ContactInfo from "../SymbolIcon/ContactInfo"
import SocialIcon from "../SymbolIcon/SocialIcon";

type Page = {
  id: number;
  name: string;
  link: string;
}

interface FooterProps {
  pageList: Array<Page>;
}

export default function Footer({ pageList }: FooterProps) {
  return (
    <div className="footer">
      <div className="footer__menu">
        <h3 className="footer__menu-title font--xl">Pages</h3>
        <ul className="footer__menu-link">
          {pageList.map(page => (
            <li key={page.id} className="menu-item">
              <a href={page.link} onClick={e => e.preventDefault()} className="item-link font--sm">{page.name}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="footer__location">
        <iframe className="footer__map" loading="lazy"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.6754384678734!2d108.22027741521576!3d16.030402344734373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219ee2c76108d%3A0x2a25291b0bf4a0fe!2sAgility%20Vietnam!5e0!3m2!1sen!2s!4v1640073620016!5m2!1sen!2s"></iframe>
      </div>
      <div className="footer__info">
        <ContactInfo />

        <div className="footer__social-icon">
          <SocialIcon />
        </div>
      </div>
    </div>
  );
}

Footer.defaultProps = {
  pageList: [
    { id: 1, name: "Eleanor Edwards", link: "#!" },
    { id: 2, name: "Ted Robertson", link: "#!" },
    { id: 3, name: "Annette Russell", link: "#!" },
    { id: 4, name: "Jennie Mckinney", link: "#!" },
    { id: 5, name: "Gloria Richards", link: "#!" },
  ]
}
