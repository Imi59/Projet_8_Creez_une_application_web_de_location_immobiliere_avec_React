
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

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
