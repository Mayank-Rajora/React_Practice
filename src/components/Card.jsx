import React from 'react';

const Card = ({ name, image, votes, onVote }) => {
    return (
        <div className='card'>
            <h4>{name}</h4>
            <img src={image} alt={name} />
            <p>Votes: {votes}</p>
            <button onClick={onVote}>Poll</button>
        </div>
    )
}

export default Card