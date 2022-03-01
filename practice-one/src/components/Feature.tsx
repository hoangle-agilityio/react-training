import { FeatureItem } from "./FeatureList";

export default function Feature({ id, title, content }: FeatureItem): JSX.Element {
  return (
    <div key={id} className="features__inner">
      <div className="features__header">
        <div className="features__icon"></div>
        <h3 className="features__title font--xl">{title}</h3>
      </div>
      <p className="features__content font--lg">{content}</p>
    </div>
  );
}
