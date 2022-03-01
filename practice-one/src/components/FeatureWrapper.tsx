import FeatureList from "./FeatureList";
import Heading from "./Heading";

export default function FeatureWrapper() {
  return (
    <div className="features">
      <Heading
        headingText="Features"
        subHeadingText="At your fingertips"
        descriptionText="Most calendars are designed for teams. Slate is designed for freelancers"
        customize="features"
      />

      <FeatureList />
    </div>
  );
}
