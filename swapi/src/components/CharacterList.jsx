import { use, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CharacterList = () => {
    const [characters, setCharacters] = useState([]);
    const [filteredCharacters, setFilteredCharacters] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const fetchAllCharacters = async () => {
            let allCharacters = [];
            let url = "https://swapi.tech/api/people/";

            while (url) {
                const res = await fetch(url);
                const data = await res.json()
                allCharacters = [...allCharacters, ...data.results];
                url = data.next;
            }

            setCharacters(allCharacters);
            setFilteredCharacters(allCharacters);
        };

        fetchAllCharacters();
    }, []);

    useEffect(() => {
        const filtered = characters.filter((char) => 
            char.name.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredCharacters(filtered);
    }, [search, characters]);

    return (
    <div>
      <h1>Personnages Star Wars</h1>
      <input
        type="text"
        placeholder="Rechercher un personnage..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ol>
        {filteredCharacters.map((char, index) => {
          const urlParts = char.url.split("/");
          const charId = urlParts[urlParts.length - 1];
          return (
            <li key={index}>
              <Link to={`/characters/${charId}`}>{char.name}</Link>
            </li>
          )
        })}
      </ol>
    </div>
  );
};

export default CharacterList;