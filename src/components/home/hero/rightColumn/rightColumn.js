import React from 'react';
import SocialMedia from "../../../global/socialMedia/socialMedia";

function RightColumn(props) {
    return (
        <div className="rightColumn">
            <span className="rightColumnText">first surfing magazine</span>
            <SocialMedia alignment="vertical"/>
            <style jsx>{`

              .rightColumn {
                position: relative;
                width: 100%;
                height: 92vh;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: end;
              }

              .rightColumnText {
                position: absolute;
                top: 25%;
                width: 40vh;
                transform:rotate(-90deg);
                font-family: "LeagueSpartan" ;
                text-align:center;
                letter-spacing:.4rem;
                color: var(--gray);
                text-transform: uppercase;
                font-size: .6vw;
              }
            `}</style>
        </div>
    );
}

export default RightColumn;