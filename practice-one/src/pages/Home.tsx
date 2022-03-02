import FeatureList from "../components/FeatureList";
import Prototyping from "../components/Prototyping";
import TopNav from "../components/TopNav";

export default function Home(): JSX.Element {
  return (
    <>
      <TopNav />
      <main>
        <FeatureList />
        <Prototyping />
      </main>
    </>
  );
}
