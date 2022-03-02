export type FeatureItem = {
  id: number;
  title: string;
  content: string;
}

interface FeatureProps {
  featureItems: Array<FeatureItem>;
}

export default function Feature({ featureItems }: FeatureProps): JSX.Element {
  return (
    <div className="features__wrapper">
      {featureItems.map(item => (
        <div key={item.id} className="features__inner">
          <div className="features__header">
            <div className="features__icon"></div>
            <h3 className="features__title font--xl">{item.title}</h3>
          </div>
          <p className="features__content font--lg">{item.content}</p>
        </div>
      ))}
    </div>
  );
}

Feature.defaultProps = {
  featureItems: [
    {
      id: 1,
      title: "The best products start with Sketch",
      content: "Slate helps you see how many more days you need to work to reach your financial goal.",
    },
    {
      id: 2,
      title: "Fastest way to organize",
      content: "Slate helps you see how many more days you need to work to reach your financial goal.",
    },
    {
      id: 3,
      title: "Work better together",
      content: "Slate helps you see how many more days you need to work to reach your financial goal.",
    },
  ]
}
