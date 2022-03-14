/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect } from 'react'

export default function Characters
    () {
    const [characters, setCharacters] = React.useState([])

    const fetchCharacters = async () => {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        const data = await response.json();
        console.log(data.results);
        setCharacters(data.results);

    }

    useEffect(() => {
        fetchCharacters();
    }, []);

    return (
        <div>
            <h1>Characters</h1>
            <ul>
                {characters.map(character => (
                    <li key={character.id}>
                        <h2>{character.name}</h2>
                        <img src={character.image} alt={character.name} />
                    </li>
                ))}
            </ul>
            
        </div>
    )
}
