import React, { useState } from 'react';
import { InfoCard } from "./InfoCard";


const InfoCards = () => {
    const [destinationsInfo, setDesInfo] = useState([
        {
            location: 'Milan',
            cost: 4500,
            imageUrl: "https://littlevisuals.co/images/a_mile.jpg"
        },
        {
            location: 'Tokyo',
            cost: 3500,
            imageUrl: "https://littlevisuals.co/images/a_mile.jpg"
        },
        {
            location: 'London',
            cost: 6500,
            imageUrl: "https://littlevisuals.co/images/a_mile.jpg"
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