import Feature from "./Feature";

export type FeatureItem = {
  id: number;
  title: string;
  content: string;
}

interface FeatureProps {
  featureItems: Array<FeatureItem>;
}

export default function FeatureList({ featureItems }: FeatureProps): JSX.Element {
  return (
    <div className="features__wrapper">
      {featureItems.map(item => (
        <Feature id={item.id} title={item.title} content={item.content} />
      ))}
    </div>
  );
}

FeatureList.defaultProps = {
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
