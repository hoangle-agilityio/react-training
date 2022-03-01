import Button from "./Button";
import Heading from "./Heading";
import Image from "./Image";

export default function Banner(): JSX.Element {
  return (
    <div className="banner">
      <Heading
        headingText="Lightning fast prototyping"
        descriptionText="Most calendars are designed for teams. Slate is designed for freelancers"
        customize="banner" />

      <Image
        srcImg="http://localhost:3000/src/assets/images/browser-screen.png"
        altImg="browser screen"
        classImg="banner__img"
      />

      <Button
        typeButton="button"
        size="md"
        buttonColor="info"
        label="Try For Free"
        customize="banner__btn"
      />
    </div>
  );
}
