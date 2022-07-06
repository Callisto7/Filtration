import React from "react";

function ListView (props)  {
    let {items} = props;

    const _renderItems = (items) => {
        return items.map((item, i) => {
            return (
                <li className="list-item" key={`li-${i}`}>
                    {item}
                </li>
            );
        });
    };

    return (
        <ul className="list">
            {_renderItems(items)}
        </ul>
    );
};

export default ListView;