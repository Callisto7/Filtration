import React from "react";
import ShopCard from './ShopCard'

function CardsView({ cards }) {
    return (
        <div className="row">
            {cards.map((card, index) => {
                return <ShopCard key={`${index} ${card.name}`} {...card}/>
            })}
        </div>
    )
};

export default CardsView;