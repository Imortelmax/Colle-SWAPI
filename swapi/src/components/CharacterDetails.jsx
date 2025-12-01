import { data, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CharacterDetails = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState(null);
    const [starshipNames, setStarshipNames] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect (() => {
        const fetchCharacter = async () => {
            try{
                const res = await fetch(`https://swapi.tech/api/people/${id}/`);
                if(!res) throw new Error('Erreur de recupération du personnage');

                const data = await res.json();
                console.log(data);
                setCharacter(data);

                console.log("Starships:", data.result.properties.starships);
                
                const ships = await Promise.all(
                    (data.result.properties.starships || []).map(async (url) => {
                        try {
                        const res = await fetch(url);
                        if (!res.ok) return "Vaisseau introuvable";
                        const shipData = await res.json();
                        return shipData.result.properties.name;
                        } catch {
                        return "Erreur chargement du vaisseau";
                        }
                    })
                );

                setStarshipNames(ships);
            } catch (err) {
            console.error(err);
            setError("Impossible de charger les données.");
        } finally {
            setLoading(false);
        }
        };

        fetchCharacter();
    }, [id]);

    if (loading) return <p>Chargement...</p>;
    if (error) return <p>{error}</p>;
    if (!character) return <p>Aucune donnée trouvée.</p>;

    return (
        <div>
            <h2>{character.result.properties.name}</h2>
            <p><strong>Yeux :</strong> {character.result.properties.eye_color}</p>
            <p><strong>Naissance :</strong> {character.result.properties.birth_year}</p>
            <p><strong>Genre :</strong> {character.result.properties.gender}</p>
            <p><strong>Vaisseaux pilotés :</strong></p>
            {starshipNames.map((name, i) => {
                const shipUrl = character.result.properties.starships[i];
                const shipId = shipUrl.split("/").filter(Boolean).pop(); // ← extrait l'ID

                return (
                    <li key={i}>
                    <Link to={`/starships/${shipId}`}>{name}</Link>
                    </li>
                );
            })}
            <p><strong>Créé le :</strong> {new Date(character.result.properties.created).toLocaleString()}</p>
            <p><strong>Modifié le :</strong> {new Date(character.result.properties.edited).toLocaleString()}</p>
            <p>
                <Link to="/">← Retour à la liste</Link>
            </p>
        </div>
    );
};

export default CharacterDetails;
