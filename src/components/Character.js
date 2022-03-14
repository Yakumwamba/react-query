import React from 'react'

export default function Character({ character }) {
    return (
        <div className="card">
            <img src={character.image} alt={character.name} />
            <div className="text-container">
                <h3> {character.name}</h3>
                <p className='status'>
                    Status: {character.status}

                </p>
                <p className='species'>
                    Species: {character.species}
                </p>
                <p className='title'> Last seen on </p>
                <p className='location'>
                    {character.location.name}
                </p>

            </div>

        </div>
    )
}
