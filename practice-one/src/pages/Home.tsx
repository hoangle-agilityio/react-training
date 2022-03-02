import TopNav from "../components/TopNav";
import Button from "../components/Button";

type Feature = {
  id: number;
  title: string;
  content: string;
}

interface HomeProps {
  featureList: Array<Feature>;
}

export default function Home({ featureList }: HomeProps) {
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
          <div className="features__wrapper">
            {featureList.map(feature => (
              <div key={feature.id} className="features__inner">
                <div className="features__header">
                  <div className="features__icon"></div>
                  <h3 className="features__title font--xl">{feature.title}</h3>
                </div>
                <p className="features__content font--lg">{feature.content}</p>
              </div>
            ))}
          </div>
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
      </main>
    </>
  );
}

Home.defaultProps = {
  featureList: [
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
