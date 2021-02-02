import Layout from "./components/layout";
import Landing from "./components/landing";
import Joke from "./components/joke";


export default function Home() {
  return (
    <div>
      <Layout>
        <Landing />
        <Joke />
      </Layout>
    </div>
  );
}
