import FeatureList from "../components/FeatureList";
import Newsletter from "../components/Newsletter";
import Prototyping from "../components/Prototyping";
import TopNav from "../components/TopNav";

export default function Home(): JSX.Element {
  return (
    <>
      <TopNav />
      <main>
        <FeatureList />
        <Prototyping />
        <Newsletter />
      </main>
    </>
  );
}
