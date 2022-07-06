import React from "react";

function ShopItem(props){
    let {title, caption, img, price} = props;

    return (
        <div className="shop-item">
            <div className="thumb">
                <figure>
                    <img src={img} alt={title} />
                </figure>
            </div>
            <div className="title">
                {title}
            </div>
            <div className="description">
                {caption}
            </div>
            <div className="price">
                {price}
            </div>
            <button className="btn" ><span className="button-card"/>Add to cart</button>
        </div>
    );
};

export default ShopItem;