import React from "react";

function ShopCard({ name, price, color, img}){
    return (
        <div className="shop-card">
                <div className="title">{name}</div>
                <div className="caption">{color}</div>
            <div className="slider">
                <figure>
                    <img 
                        src={img} 
                        alt={name}
                    />
                </figure>
            </div>
            <footer className="info">
                <span className="price">
                    &#36;{price}
                </span>
                <button className="btn"><span className="button-card"/>Add to cart</button>
            </footer>
        </div>
    )
};

export default ShopCard;