import Header from "../../components/Header/Header";
import Presentation from "../../components/Presentation/Presentation";
import Portfolio from "../../components/Portfolio/Portfolio";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Presentation />
        <Portfolio />
      </main>
    </>
  );
};

export default Home;
