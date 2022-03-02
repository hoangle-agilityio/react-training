import Button from "./Button";
import Heading from "./Heading";
import Image from "./Image";

export default function Prototyping(): JSX.Element {
  return (
    <div className="prototyping">
      <Heading
        headingText="Lightning fast prototyping"
        descriptionText="Most calendars are designed for teams. Slate is designed for freelancers"
        customize="prototyping"
      />

      <Button
        typeButton="button"
        size="md"
        buttonColor="info"
        label="Try For Free"
      />

      <Image
        srcImg="http://localhost:3000/src/assets/images/laptop-img.png"
        altImg="Lightning fast prototyping"
        classImg="prototyping__img"
      />
    </div>
  );
}
