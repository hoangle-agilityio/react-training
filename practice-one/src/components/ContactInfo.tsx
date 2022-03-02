import SymbolIcon from "./SymbolIcon";

export default function ContactInfo(): JSX.Element {
  return (
    <div className="contact__item">
      <div className="contact-item__inner">
        <SymbolIcon width="26" height="33" icon="address" />

        <p className="contact-item__content">6386 Spring St undefined Anchorage, Georgia 12473 United States</p>
      </div>
      <div className="contact-item__inner">
        <SymbolIcon width="21" height="35" icon="phone" />

        <a href="tel:+8435550130" className="contact-item__content contact-item__link">(843) 555-0130</a>
      </div>
      <div className="contact-item__inner">
        <SymbolIcon width="26" height="33" icon="email" />

        <a href="mailto:willie.jennings@example.com" className="contact-item__content contact-item__link">willie.jennings@example.com</a>
      </div>
    </div>
  );
}
