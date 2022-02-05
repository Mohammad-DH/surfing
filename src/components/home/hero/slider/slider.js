import React, {useState} from 'react';
import {
    heroSliderAnimationBack,
    heroSliderAnimationGo,
} from "../../../animation/animation";

function Slider() {
    let fakeData = [
        {
            imageUrl: '/heroImage.jpg',
            title: 'your beautiful escape',
            text: 'One of the greatest things about the sport of surfing is that you need only three things: your body, a surfboard, and a wave.'
        },
        {
            imageUrl: '/heroImage.jpg',
            title: 'lorem ipsum dolor sit amet 2',
            text: 'One of the greatest things about the sport of surfing is that you need only three things: your body, a surfboard, and a wave.'
        },
        {
            imageUrl: '/heroImage.jpg',
            title: 'lorem ipsum dolor sit amet 3',
            text: 'One of the greatest things about the sport of surfing is that you need only three things: your body, a surfboard, and a wave.'
        },
        {
            imageUrl: '/heroImage.jpg',
            title: 'lorem ipsum dolor sit amet 4',
            text: 'One of the greatest things about the sport of surfing is that you need only three things: your body, a surfboard, and a wave.'
        },
        {
            imageUrl: '/heroImage.jpg',
            title: 'lorem ipsum dolor sit amet 5',
            text: 'One of the greatest things about the sport of surfing is that you need only three things: your body, a surfboard, and a wave.'
        },
    ]

    const [active, setactive] = useState(0)

    const move = (direction) => {
        if (direction === "n" && (active + 1) < fakeData.length) {
            heroSliderAnimationGo()
            setactive(active + 1)
            heroSliderAnimationBack()
        } else if (direction === "p" && (active - 1) >= 0) {
            heroSliderAnimationGo()
            setactive(active - 1)
            heroSliderAnimationBack()
        }
    }

    return (
        <div className="slider">
            {fakeData.map((e, i) => {
                return (
                    <div className={i === active ? "sliderCard" : "sliderCard dontShow"}>
                        <div className="sliderCardContent">
                            <span className="typeOne before">{e.title.split(' ')[0]}</span>
                            <span className="typeTwo sliderTitle">{e.title.split(' ').slice(1).join(' ')}</span>
                            <p className="typeThree">{e.text}</p>
                        </div>
                        <img className="sliderCardImage" src={e.imageUrl} alt=""/>
                    </div>
                )
            })}
            <div className="sliderControl">
                <div onClick={() => move("p")}
                     className={(active - 1) >= 0 ? "heroPre" : "heroPre notAllowed"}>
                    <img src="/arrow.svg" alt=""/>
                </div>
                <div className="number">
                    <span className="current">{active + 1}</span>
                    <span> / </span>
                    <span>{fakeData.length}</span>
                </div>
                <div onClick={() => move("n")}
                     className={(active + 1) < fakeData.length ? "heroNext" : "heroNext notAllowed"}>
                    <img src="/arrow.svg" alt=""/>
                </div>
            </div>

            <style jsx>{`

              .dontShow {
                display: none !important;
              }

              .slider {
                position: relative;
                width: 100%;
                height: calc(100vh - 17vh);

              }

              .sliderCard {
                position: absolute;
                display: flex;
                align-items: center;
                justify-content: end;
                width: 100%;
                height: 90%;
              }

              .sliderCardContent {
                position: absolute;
                left: 0;
                margin-top: 5%;
                width: 50%;
                display: flex;
                flex-direction: column;
                align-items: start;
                justify-content: space-evenly;
                z-index: 5;
              }

              .before {
                color: var(--blue)
              }

              .sliderTitle {
                font-size: 4.5vw;
                font-weight: 800;
              }

              .sliderCardContent p {
                width: 70%;
              }

              .sliderCard img {
                width: 83%;
                height: 100%;
                z-index: 1;
                -webkit-box-shadow: -10px 13px 25px 5px rgba(0, 0, 0, 0.2);
                box-shadow: -10px 13px 25px 5px rgba(0, 0, 0, 0.2);
              }

              .sliderControl {
                position: absolute;
                left: 0;
                bottom: 10%;
                width: 9%;
                display: flex;
                align-items: center;
                justify-content: space-evenly;
                font-size: .8vw;
                font-family: "LeagueSpartan";
              }

              .heroNext, .heroPre {
                cursor: pointer;
              }

              .heroNext img, .heroPre img {
                height: 1vw;
              }

              .heroPre img {
                transform: rotate(180deg);
              }

              .current {
                color: var(--blue);
              }
            `}</style>
        </div>
    );
}

export default Slider;