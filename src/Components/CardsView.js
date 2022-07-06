import React from "react";

function CardsView(props) {
    let {layout, cards} = props;

    const _getLayoutClasses = (layout) => {
        return Object.keys(layout).map(key => `col-${key}-${layout[key]}`).join(" ");
    };

    let layoutClasses = _getLayoutClasses(layout);
    const _renderCards = (cards) => {
        return cards.map((card, i) => {
            return (
                <div className={layoutClasses} key={`card-${i}`}>
                    {card}
                </div>
            );
        });
    };

    return (
        <div className="row">
            {_renderCards(cards)}
        </div>
    );
};

export default CardsView;