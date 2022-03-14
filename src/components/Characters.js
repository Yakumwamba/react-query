/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import { useQuery } from "react-query"
import Character from './Character';

export default function Characters
    () {

    const [page, setPage] = React.useState(1);

    const fetchCharacters = async ({ queryKey }) => {

        console.log('fetching characters', queryKey[1]);
        const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${queryKey[1]}`);
        return response.json();

    }
    const { data, status } = useQuery(["characters", page], fetchCharacters)


    if (status === "loading") {
        console.log("Loading....")
        return <div>Loading...</div>
    }
    if (status === "error") {

        return <div>Error</div>
    }
    if (status === "success") {
        console.log(data)
    }


    return (
        <div className='characters'>


            {data.results.map(character => (

                <Character character={character} />
            ))}

            <div>
                <button disabled={page === 1}  onClick= { () => setPage(page - 1) } >Previous</button>
                <button onClick={() => setPage(page + 1)}>Next</button>
            </div>
        </div>
    )
}
