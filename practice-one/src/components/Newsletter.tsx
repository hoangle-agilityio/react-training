import Button from "./Button";
import Heading from "./Heading"

export default function Newsletter(): JSX.Element {
  return (
    <div className="newsletter">
      <Heading
        headingText="Newsletter"
        subHeadingText="At your fingertips"
        customize="newsletter"
      />

      <h3 className="newsletter__title font--xl">Subscribe to our Newsletter</h3>
      <p className="newsletter__content font--lg">Available exclusivery on Figmaland</p>
      <form action="javascript:void(0)" className="newsletter__form">
        <input type="email" placeholder="Your Email" name="your-email" className="newsletter__email" />

        <Button
          typeButton="submit"
          buttonColor="danger"
          label="Subscribe"
          customize="newsletter__btn"
        />
      </form>
    </div>
  );
}
