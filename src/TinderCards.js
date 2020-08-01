import React, { useState } from 'react'
import TinderCard from "react-tinder-card"
import './TinderCard.css'



function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: "Narendra Modi",
            url: 'https://images.financialexpress.com/2020/06/modi-660-1.jpg'
        },
        {
            name: "Arvind Kejriwal",
            url: 'https://static.toiimg.com/thumb/msid-77233574,imgsize-516659,width-400,resizemode-4/77233574.jpg'
        }
    ]);

    // BAD
    // const people=[];
    // people.push("abhi","ram")

    // Good
    // setPeople([...people,'rohit','rohan'])

    return (
        <div>
            {/* <h1>Tinder Cards</h1> */}
            <div className="tinderCards__cardContainer">
                {people.map(person => (
                    <TinderCard
                        className="swipe"
                        key={person.map}
                        preventSwipe={['up', 'down']}
                    >
                        <div
                            style={{ backgroundImage: `url(${person.url})` }}
                            className="card"
                        >
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default TinderCards;