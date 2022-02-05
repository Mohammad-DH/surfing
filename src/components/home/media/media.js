import React from 'react';
import Link from "../../global/link/link";

function Media() {
    return (
        <div className="media">
            <div className="mediaImage">
                <img src="/mediaImage.jpg" alt=""/>
                <div className="mediaImageContent">
                    <p className="typeThree">
                        By better understanding the various aspects of surfing, you will improve faster and have more
                        fun in
                        the water.
                    </p>
                    <Link text="read more" url="#"/>
                </div>
            </div>

            <div className="mediaVideo">
                <iframe src="https://www.youtube.com/embed/rj7xMBxd5iY/?controls=1"></iframe>
            </div>
            <style jsx>{`
              .media {
                width: 84vw;
                height: 80vh;
                margin: 0 8vw;
                margin-top: 8vh;
                display: flex;
                align-items: start;
                justify-content: start;
              }

              .mediaImage {
                width: 50%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-evenly;

              }

              .mediaImage img {
                width: 100%;
              }

              .mediaImageContent {
                width: 56%;
                margin: 5vh 0;
                margin-right: 3vw;
              }

              .mediaImage p {
                margin-bottom: 5vh;
              }

              .mediaVideo {
                position: relative;
                width: 50%;
                height: 100%;
              }

              .mediaVideo iframe {
                position: absolute;
                right: 2%;
                top: 7%;
                width: 48vw;
                height: 85%;
                border: none;
                -webkit-box-shadow: -10px 13px 22px 5px rgba(0, 0, 0, 0.15);
                box-shadow: -10px 13px 22px 5px rgba(0, 0, 0, 0.15);
              }
            `}</style>
        </div>
    );
}

export default Media;