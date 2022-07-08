import React from "react";
import ShopItem from "./ShopItem";

function ListView ({ items })  {
    return (
        <div className="list-item">
            {items.map((item, index) => {
                return <ShopItem className="list" key={`${index}${item.name}`} {...item}/>
            })}
        </div>
    )
};

export default ListView;