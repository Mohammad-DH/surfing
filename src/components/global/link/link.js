import React from 'react';

function Link({text, url, color}) {
    return (
        <div className="link">
            <a id="Link" className={color && color === "blue" ? "typeOne linkBlueMode" : "typeOne"}
               href={url}>{text}</a>
            <style jsx>{`
              .link {
                width: fit-content;
                transition: all 0.2s linear;
                padding: .5vw .5vw;
                padding-bottom: 0;
                border-radius:5px;
                overflow: hidden;
                cursor: pointer;
              }

              #Link {
                transition: all 0.2s linear;
              }

              .linkBlueMode {
                color: var(--blue);
              }

              .link:after {
                content: "";
                display: flex;
                width: 100%;
                padding: 0 .5vw;
                height: .2vh;
                margin-top: 1vh;
                margin-left: -.5vw;
                background-color: var(--blue);
              }

              .link:hover {
                background-color: var(--blue);
              }

              .link:hover #Link {
                color: #fff;
              }

            `}</style>
        </div>
    );
}

export default Link;