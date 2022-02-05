import React from 'react';

function ShopCard({data}) {
    if (data) {
        return (
            <div className="shopCard">
                <div className="shopCardImage">
                    <img src={data.image} alt=""/>
                </div>
                <div className="shopCardDetail">
                    <span className="typeThree shopCardType">{data.type}</span>
                    <span className="typeTwo shopCardName">{data.name}</span>
                    <span className="typeThree shopCardPrice">${data.price}</span>
                    <span className="typeOne shopCardBuy">buy</span>
                </div>
                <style jsx>{`
                  .shopCard {
                    position: relative;
                    width: 25vw;
                    display: flex;
                    align-items: center;
                    justify-content: start;
                  }

                  .shopCardImage {
                    width: 70%;
                  }

                  .shopCardImage img {
                    width: 100%;
                  }

                  .shopCardDetail {
                    position: absolute;
                    display: flex;
                    flex-direction: column;
                    align-items: start;
                    justify-content: center;
                    margin-top: 35%;
                    right: -9%;
                  }

                  .shopCardType {
                    font-size: .75vw;
                    letter-spacing: 0.2vw;
                    text-transform: uppercase;

                  }

                  .shopCardName {
                    font-size: 1.8vw;
                  }

                  .shopCardPrice {
                    font-size: 1.5vw;
                    align-self: center;
                    margin-bottom: -20%;
                    margin-top: 30%;
                    color: #d673b4;
                  }

                  .shopCardBuy {
                    font-size: 1vw;
                    align-self: center;
                    text-align: center;
                    margin-bottom: -20%;
                    margin-top: 30%;
                  }
                `}</style>
            </div>
        );
    } else {
        return (
            <div className="shopCard"/>
        );
    }
}

export default ShopCard;