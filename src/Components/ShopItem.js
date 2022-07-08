import React from "react";

function ShopItem({ name, price, color, img }){

    return (
       <div className="shop-item">
            <div className="thumb">
                <figure>
                    <img 
                        src={img} 
                        alt={name} 
                    />
                </figure>
            </div>
            <div className="title">
                {name}
            </div>
            <div className="description">
                {color}
            </div>
            <div className="price">
                &#36;{price}
            </div>
            <button className="btn"><span className="button-card"/>Add to cart</button>
       </div>
    );
};

export default ShopItem;