import Banner from "../Banner";
import Cards from "../Cards";
// je dois importer mon dossier json avec les logements pour pouvoir les afficher dynamiquement
import Logements from "../../data/logements.json";

function Home() {
  return (
    <div className="home">
      <Banner />
     // <div className="gallery">
        <Cards Logements={Logements} />
      </div>
    </div>
  );
}
export default Home;

//installation react rooter dom // npm i react-router-dom
