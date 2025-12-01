import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

const StarshipDetails = () => {
    const { id } = useParams();
    const [starship, setStarship] = useState(null);
    const [pilotNames, setPilotNames] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchStarship = async () => {
        try {
            const res = await fetch(`https://swapi.tech/api/starships/${id}/`);
            if (!res.ok) throw new Error("Erreur de récupération du vaisseau");

            const data = await res.json();
            const props = data.result.properties;
            setStarship(props);

            const pilotsArray = props.pilots || [];

            const pilots = await Promise.all(
                pilotsArray.map(async (url) => {
                    const res = await fetch(url);
                    if (!res.ok) return { name: "Pilote inconnu", id: null };

                    const pilotData = await res.json();
                    const name = pilotData.result.properties.name;
                    const pilotId = url.split("/").filter(Boolean).pop(); // extrait l'ID
                    return { name, id: pilotId };
                })
            );

            setPilotNames(pilots);
        } catch (err) {
            console.error(err);
            setError("Impossible de charger les infos du vaisseau.");
        } finally {
            setLoading(false);
        }
        };

        fetchStarship();
    }, [id]);

    if (loading) return <p>Chargement...</p>;
    if (error) return <p>{error}</p>;
    if (!starship) return <p>Données introuvables.</p>;

    return (
        <div>
        <h2>{starship.name}</h2>
        <p><strong>Modèle :</strong> {starship.model}</p>
        <p><strong>Fabricant :</strong> {starship.manufacturer}</p>

        <p><strong>Pilotes :</strong></p>
        {pilotNames.length > 0 ? (
            <ul>
            {pilotNames.map((pilot, i) => (
                <li key={i}>
                {pilot.id ? (
                    <Link to={`/characters/${pilot.id}`}>{pilot.name}</Link>
                ) : (
                    pilot.name
                )}
                </li>
            ))}
            </ul>
        ) : (
            <p>Aucun pilote référencé</p>
        )}

        <p><Link to="/">← Retour à la liste</Link></p>
        </div>
    );
};

export default StarshipDetails;