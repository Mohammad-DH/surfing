import React from 'react';

function Quote() {
    return (
        <div className="Quote">
            <p className="typeTwo QuoteText">Surfing is the most blissful experience you can have on this planet, a
                taste of
                heaven.</p>
            <span className="typeOne QuoteOwner">John McCarthy</span>

            <style jsx>{`
              .Quote {
                width: 100%;
                height: 20vh;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-evenly;
                padding-top: 10vh;
                padding-bottom: 7vh;
              }

              .QuoteText {
                font-size: 2vw;
                width: 49%;
                text-align: center;
                text-transform: none;
                transform: scale(.9);
                color: var(--gray);
              }

              .QuoteOwner {
                color: var(--gray);
              }
            `}</style>
        </div>
    );
}

export default Quote;