import Banner from "../components/Banner1/Banner";
import Cards from "../components/Card/Cards";
import Appts from "../data/logements.json";

function Home() {
  return (
    <div className="home">
      <Banner />
      <div className="gallery">
        <Cards Logements={Appts} />
      </div>
    </div>
  );
}
export default Home;