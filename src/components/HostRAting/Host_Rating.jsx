import logements from "../../data/logements.json";
import { useParams } from "react-router-dom";
import filledStar from "../../assets/images/filled-star.png";
import emptyStar from "../../assets/images/empty-star.png";

function Host_Rating() {
  const findLogementID = (id) => {
    return logements.find((logement) => logement.id === id);
  };

  const { id } = useParams();
  const logement = findLogementID(id);

  const hostNameParts = logement.host.name.split(" ");
  const hostFirstName = hostNameParts[0];
  const hostLastName = hostNameParts.slice(1).join(" ");

  const renderRatingStars = (rating) => {
    const filledStarsCount = Math.round(rating);
    const emptyStarsCount = 5 - filledStarsCount;
    //manière courante pour créer un tableau d'une certaine longueur et le remplir avec des éléments
    const filledStars = Array(filledStarsCount)
      .fill(null)
      .map((_, index) => (
        <img key={`filled-star-${index}`} src={filledStar} alt="Filled star" />
      ));

    const emptyStars = Array(emptyStarsCount)
      .fill(null)
      .map((_, index) => (
        <img key={`empty-star-${index}`} src={emptyStar} alt="Empty star" />
      ));

    return [...filledStars, ...emptyStars];
  };

  return (
    <div className="host-rating">
      <div className="host">
        <span>
          <p>{hostFirstName}</p>
          <p>{hostLastName}</p>
        </span>
        <img src={logement.host.picture} alt={logement.host.name} />
      </div>
      <div className="stars">
        <p> {renderRatingStars(logement.rating)}</p>
      </div>
    </div>
  );
}

export default Host_Rating;
