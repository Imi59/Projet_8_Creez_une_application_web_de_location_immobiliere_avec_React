import logements from "../data/logements.json"; // Importer les données des logements fournies par OC
import { useParams } from "react-router-dom";

function Host() {
  const findLogementID = (id) => {
    return logements.find((logement) => logement.id === id);
  };

  const { id } = useParams(); // Obtenez l'ID du logement à partir des paramètres de l'URL
  const logement = findLogementID(id); // Recherchez le logement correspondant à l'ID
  // Séparer le nom complet de l'hôte en prénom et nom de famille
  const hostNameParts = logement.host.name.split(" ");
  const hostFirstName = hostNameParts[0];
  const hostLastName = hostNameParts.slice(1).join(" ");

  return (
    <div className="host">
      <span>
        <p>{hostFirstName}</p>
        <p>{hostLastName}</p>
      </span>
      <img src={logement.host.picture} alt={logement.host.name} />
    </div>
  );
}

export default Host;
