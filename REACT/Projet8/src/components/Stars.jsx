import filledStar from "../assets/images/filled-star.png"; // Importer l'image d'étoile remplie
import emptyStar from "../assets/images/empty-star.png"; // Importer l'image d'étoile vide
import logements from "../data/logements.json"; // Importer les données des logements fournies par OC
import { useParams } from "react-router-dom";

function Stars() {
  const findLogementID = (id) => {
    return logements.find((logement) => logement.id === id);
  };

  const { id } = useParams(); // Obtenez l'ID du logement à partir des paramètres de l'URL
  const logement = findLogementID(id); // Recherchez le logement correspondant à l'ID

  const renderRatingStars = (rating) => {
    const filledStarsCount = Math.round(rating);
    const emptyStarsCount = 5 - filledStarsCount;

    const stars = [];

    // Ajout des étoiles pleines
    for (let i = 0; i < filledStarsCount; i++) {
      stars.push(<img key={i} src={filledStar} alt="Filled star" />);
    }

    // Ajout des étoiles vides
    for (let i = 0; i < emptyStarsCount; i++) {
      stars.push(
        <img key={filledStarsCount + i} src={emptyStar} alt="Empty star" />
      );
    }

    return stars;
  };
  return (
    <div>
      <p className="stars"> {renderRatingStars(logement.rating)}</p>
    </div>
  );
}

export default Stars;
