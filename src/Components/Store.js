import React from "react";
import IconSwitch from "./IconSwitch";
import CardsView from "./CardsView";
import ListView from "./ListView";
import ShopCard from "./ShopCard";
import ShopItem from "./ShopItem";

const view_list = "view_list";
class Store extends React.Component {
    products = [{
      name: "Nike Metcon 2",
      price: "130",
      color: "red",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
    }, {
      name: "Nike Metcon 2",
      price: "130",
      color: "green",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
    }, {
      name: "Nike Metcon 2",
      price: "130",
      color: "blue",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
    }, {
      name: "Nike Metcon 2",
      price: "130",
      color: "black",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
    }, {
      name: "Nike free run",
      price: "170",
      color: "black",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
    }, {
      name: "Nike Metcon 3",
      price: "150",
      color: "green",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
    }];

    cardsLayout = {
        xs: 12,
        sm: 8,
        md: 6,
        lg: 4
    };
  
    constructor(props) {
      super(props);
    }


  
    render() {
      return(        
        <>
        <div className="iconSwitch">
            <IconSwitch icon={view_list} 
                        onSwitch={() => console.log("change state here")}/>

        </div>
        {this._renderLayout(true)}
        </>
      )
    }

    _renderLayout(cardView) {
        if (cardView) {
            return (
                <CardsView layout={this.cardsLayout} cards={this._getShopItems(this.products, cardView)}/>
            );
        }
            return (
                <ListView items={this._getShopItems(this.products, cardView)}/>
        )
    };

    _getShopItems(products, cardView) {
        return products.map(product => {
            let cardItems = {
                title: product.name,
                caption: product.color,
                img: product.img,
                price: "$" + product.price
            };

            if (cardView) {
                return (
                    <ShopCard {...cardItems}/>
                );
            }
            return (
                <ShopItem {...cardItems}/>
            )
        });
    }
  };

  export default Store;
  