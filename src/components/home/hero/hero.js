import React from 'react';
import Header from "../../global/header/header";
import Slider from "./slider/slider";
import RightColumn from "./rightColumn/rightColumn";

function Hero() {
    return (
        <div className="hero box">
            <div/>

            <div>
                <Header/>
                <Slider/>
            </div>

            <RightColumn/>

            <style jsx>{`
              .hero {
                overflow: hidden;
              }
            `}</style>
        </div>
    );
}

export default Hero;