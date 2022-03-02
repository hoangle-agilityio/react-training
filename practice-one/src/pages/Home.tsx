import TopNav from "../components/TopNav";
import Button from "../components/Button";

export default function Home() {
  return (
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
          customize="banner__btn"
        />
      </div>
    </header>
  );
}
