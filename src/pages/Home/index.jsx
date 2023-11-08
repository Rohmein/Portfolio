import Header from "../../components/Header/Header";
import Presentation from "../../components/Presentation/Presentation";
import Portfolio from "../../components/Portfolio/Portfolio";
import Competences from "../../components/Competences/Competences";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Presentation />
        <Portfolio />
        <Competences />
      </main>
      <Footer />
    </>
  );
};

export default Home;
