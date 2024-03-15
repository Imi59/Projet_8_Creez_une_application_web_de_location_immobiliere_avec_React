//Dans React, les composants peuvent recevoir des données, appelées "props" (propriétés),
// de la part de leurs composants parents. Ces props sont passées
// en tant qu'arguments aux composants lors de leur utilisation
import PropTypes from "prop-types";
import { Link } from "react-router-dom"; // pour faire le lien avec ma card et son explication 

function Cards({ Logements }) {
  return(
   Logements.map((logement) => (
    <Link to={`/Logement/${logement.id}`} className="cards" key={logement.id}>
      <img src={logement.cover} alt={logement.title} />
      <h3>{logement.title}</h3>
    </Link>
  ))
  );
}

Cards.propTypes = {
  Logements: PropTypes.array.isRequired
};

export default Cards;
