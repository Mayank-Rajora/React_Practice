import React, { useState } from 'react';
import Card from './Card';


const Home = () => {
    const [pizza, setPizza] = useState(0);
    const [burger, setBurger] = useState(0);

    let leader;
    if (pizza > burger) leader = "🍕 Pizza is winning!";
    else if (burger > pizza) leader = "🍔 Burger is winning!";
    else if (burger == pizza && pizza == 0) leader = "";
    else leader = "It's a tie!";

    return (
        <div className='home'>
            <Card
                name="Pizza"
                image="Pizza.jpg"
                votes={pizza}
                onVote={() => setPizza(pizza + 1)}
            />

            <div className='middle'>
                <h2>{leader}</h2>
                <button onClick={() => { setPizza(0); setBurger(0); }}>
                    Reset
                </button>
            </div>

            <Card
                name="Burger"
                image="Burger.jpg"
                votes={burger}
                onVote={() => setBurger(burger + 1)}
            />
        </div>
    )
}

export default Home