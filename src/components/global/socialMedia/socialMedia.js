import React from 'react';

function SocialMedia({alignment}) {
    return (
        <div className={alignment === "vertical" ? "social vertical" : "social horizontal"}>

            <div className="socialIconBox">
                <img className="badImage" src="/tumblr.png" alt=""/>
            </div>
            <div className="socialIconBox">
                <img src="/twitter.png" alt=""/>
            </div>
            <div className="socialIconBox">
                <img src="/vimeo.png" alt=""/>
            </div>


            <style jsx>{`
              .social {
                display: flex;
              }

              .socialIconBox{
                width: 2.2vw;
                height: 2.2vw;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius:5px;
                transition: all 0.2s linear;
                cursor: pointer;
              }
              .socialIconBox:hover {
                background-color: var(--blue)
              }
              .badImage {
                width: 1vw !important;
              }

              .vertical {
                flex-direction: column;
                align-items: center;
                justify-content: space-between;
                width: 100%;
                height: 18%;
              }

              .vertical img {
                width: 1.5vw;
              }

              .horizontal {
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                width: 8%;
              }

              .horizontal img {
                width: 1.5vw;
              }
            `}</style>
        </div>
    );
}

export default SocialMedia;