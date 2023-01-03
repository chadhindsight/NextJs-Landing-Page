import React, { useState } from 'react';
import { InfoCard } from "./InfoCard";


const InfoCards = () => {
    const [destinationsInfo, setDesInfo] = useState([
        {
            location: 'Milan',
            cost: 4500,
            imageUrl: "https://littlevisuals.co/images/a_mile.jpg",
            rating: 4.7
        },
        {
            location: 'Tokyo',
            cost: 3500,
            imageUrl: "https://littlevisuals.co/images/canal.jpg",
            rating: 5
        },
        {
            location: 'London',
            cost: 5500,
            imageUrl: "https://littlevisuals.co/images/building.jpg",
            rating: 4
        }
    ])

    return (
        <div>
            {
                destinationsInfo.map((destination, i) => {
                    return <InfoCard {...destination} key={i} />
                })
            }
        </div>
    );
};

export default InfoCards;