import Feature from "../components/Feature";
import TopNav from "../components/TopNav";
import Button from "../components/Button";

export default function Home(): JSX.Element {
  return (
    <>
      <header className="header">
        <TopNav />

        <div className="banner">
          <h2 className="banner__heading heading">
            Lightning fast prototyping
          </h2>
          <p className="banner__desc desc">
            Most calendars are designed for teams. Slate is designed for freelancers
          </p>
          <img src="../src/assets/images/browser-screen.png" alt="browser screen" className="banner__img" />

          <Button
            typeButton="button"
            size="md"
            buttonColor="info"
            label="Try For Free"
            customize="banner__btn" />
        </div>
      </header>
      <main>
        <div className="features">
          <h3 className="features__sub-heading font--xl">At your fingertips</h3>
          <h2 className="features__heading heading">Features</h2>
          <p className="features__desc desc">Most calendars are designed for teams. Slate is designed for freelancers</p>

          <Feature />
        </div>

        <div className="prototyping">
          <h2 className="prototyping__heading heading">Lightning fast prototyping</h2>
          <p className="prototyping__desc desc">Most calendars are designed for teams. Slate is designed for freelancers</p>

          <Button
            typeButton="button"
            size="md"
            buttonColor="info"
            label="Try For Free"
          />

          <img src="../src/assets/images/laptop-img.png" alt="Lightning fast prototyping" className="prototyping__img" />
        </div>

        <div className="newsletter">
          <h3 className="newsletter__sub-heading font--xl">At your fingertips</h3>
          <h2 className="newsletter__heading heading">Newsletter </h2>
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
      </main>
    </>
  );
}
