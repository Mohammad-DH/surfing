import React, {useState} from 'react';
import Link from "../../global/link/link";
import ShopCard from "./shopCard/shopCard";
import {shopSliderAnimationBack, shopSliderAnimationGo} from "../../animation/animation";

function Shop() {

    let fakeData = [
        {type: "funboards", name: "1 chilli rare bird", price: "890", image: "/board1.png"},
        {type: "syrfboards", name: "2 emery nem XF", price: "950", image: "/board2.png"},
        {type: "funboards", name: "3 agency GROM", price: "670", image: "/board3.png"},
        {type: "funboards", name: "4 chilli rare bird", price: "890", image: "/board1.png"},
        {type: "syrfboards", name: "5 emery nem XF", price: "950", image: "/board2.png"},
        {type: "funboards", name: "6 agency GROM", price: "670", image: "/board3.png"},
        {type: "funboards", name: "7 agency GROM", price: "670", image: "/board3.png"},
        {type: "funboards", name: "8 agency GROM", price: "670", image: "/board3.png"},
        {type: "funboards", name: "9 agency GROM", price: "670", image: "/board3.png"},
    ]

    const [state, setstate] = useState(0)

    const move = (direction) => {
        if (direction === "n" && (state / 3) <= Math.ceil(fakeData.length / 3) && fakeData[state + 3]) {
            shopSliderAnimationGo()
            setTimeout(() => {
                setstate(state + 3)
            }, 800)
            shopSliderAnimationBack()
        } else if (direction === "p" && (state - 3) >= 0) {
            shopSliderAnimationGo()
            setTimeout(() => {
                setstate(state - 3)
            }, 800)
            shopSliderAnimationBack()
        }
    }

    return (
        <div className="Shop">
            <div className="shopTitle">
                <span className="shopTitleOne typeOne">shop</span>
                <span className="shopTitleTwo typeTwo">surfboards</span>
            </div>

            <div className="shopList">
                <div className="shopListControler">
                    <img
                        className={(state - 3) >= 0 ? "shopListControlerImage" : "shopListControlerImage notAllowed"}
                        onClick={() => move("p")} style={{"transform": "rotate(180deg)"}} src="/arrow.svg" alt=""/>
                </div>
                <ShopCard id="1" data={fakeData[state]}/>
                <ShopCard id="2" data={fakeData[state + 1]}/>
                <ShopCard id="3" data={fakeData[state + 2]}/>
                <div className="shopListControler">
                    <img
                        className={fakeData[state + 3] ? "shopListControlerImage" : "shopListControlerImage notAllowed"}
                        onClick={() => move("n")} src="/arrow.svg" alt=""/>
                </div>
            </div>

            <Link className="shopLink" text="show all" url="#"/>

            <style jsx>{`
              .Shop {
                width: 100%;
                height: 105vh;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                margin-bottom: 10vh;
              }

              .shopTitle {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-evenly;
                margin-top: 15vh;
                margin-bottom: -4vh;
              }

              .shopTitleOne {
                color: var(--blue)
              }

              .shopTitleTwo {
                font-size: 3vw;
              }

              .shopList {
                display: flex;
                width: 97%;
                align-items: center;
                justify-content: space-between;
                padding-bottom: 10vh;
              }

              .shopListControler {
                width: 2.5vw;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
              }

              .shopListControlerImage {
                width: 2.5vw;
                cursor: pointer;
              }

            `}</style>
        </div>
    );
}

export default Shop;