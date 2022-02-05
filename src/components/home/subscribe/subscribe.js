import React from 'react';

function Subscribe() {
    return (
        <div className="subscribe">
            <div className="subscribeText">
                <span className="typeTwo subscribeTitle">join the club</span>
                <span className="typeThree subscribeDescription">By better understanding the various aspects of surfing, you will improve faster and have more fun in the water.</span>
            </div>
            <div className="subscribeForm">
                <input placeholder="your e-mail" type="text"/>
                <div className="subscribeFormButton"><img src="/arrow.svg" alt=""/></div>
            </div>
            <style jsx>{`
              .subscribe {
                width: 100%;
                height: 35vh;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-evenly;
              }

              .subscribeText {
                width: 40%;
                height: 45%;
                text-align: center;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-between;
              }

              .subscribeTitle {
                font-size: 3vw;
              }

              .subscribeForm {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 40%;
                height: 6vh;
                background: rgba(224, 224, 224, 0.3);
              }

              .subscribeForm input {
                font-family: "LeagueSpartan";
                width: calc(100% - 6vh);
                font-size: .8vw;
                height: 100%;
                text-transform: uppercase;
                letter-spacing: .5vh;
                border: none;
                outline: none;
                background: transparent;
                padding: 0 1vw;
                margin-bottom: -8px;
              }

              .subscribeFormButton {
                display: flex;
                align-items: center;
                justify-content: center;
                height: 6vh;
                width: 6vh;
                background: var(--blue);
                cursor: pointer;
                transition: all 0.2s linear;
              }

              .subscribeFormButton:hover {
                background: #2b83f6;
              }

              .subscribeFormButton img {
                height: 2.5vh;
                width: 2.5vh;
              }
            `}</style>
        </div>
    );
}

export default Subscribe;