import React from "react";

function ShopCard(props){
    let {title, caption, img, price} = props;
    return (
        <div className="shop-card">
            <div className="title">
                {title}
            </div>
            <div className="description">
                {caption}
            </div>
            <div className="slider">
                <figure>
                    <img src={img} alt={title} />
                </figure>
            </div>

            <div className="info">
                <div className="price">
                    {price}
                </div>
                <button className="btn"><span className="button-card"/>Add to cart</button>
            </div>
        </div>
    );
};

export default ShopCard;