import React from 'react';
import Link from "../../global/link/link";

function Article({title, summery, number, image, url, mood}) {
    return (
        <div className="article box">
            <div/>

            <div className={mood === "1" ? "articleTemplate" : "articleTemplate articleTemplateMood2"}>
                <div className="articleDetailBox">
                    <div className="articleDetail">
                        <h3 content={number} className="typeTwo articleTitle">{title}</h3>
                        <p className="typeThree articleSummery">{summery}</p>
                        <Link text="read more" url={url}/>
                    </div>
                </div>
                <div className={mood === "1" ? "articleImage" : "articleImage articleImageMood2"}>
                    <span
                        className={mood === "1" ? "typeOne articleImageSideText" : "typeOne articleImageSideTextMood2"}
                    >surf camps</span>
                    <img src={image} alt=""/>
                </div>
            </div>

            <div/>
            <style jsx>{`
              .article {
                width: 100%;
                height: 70vh;
              }

              .articleTemplate {
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-between;
              }

              .articleTemplateMood2 {
                flex-direction: row-reverse;
                justify-content: center !important;
              }

              .articleDetailBox {
                width: 38%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;

              }

              .articleDetail {
                width: 70%;
                position: relative;
                height: fit-content;
                display: flex;
                flex-direction: column;
                align-items: start;
                justify-content: space-between;

              }

              .articleTitle {
                font-size: 3vw;
                margin-bottom: 2.4vh;
                margin-top: 0;
              }

              .articleTitle:before {
                font-family: "LeagueSpartan";
                content: attr(content);
                position: absolute;
                top: -30%;
                font-size: 9vw;
                z-index: -1;
                color: rgba(0, 0, 0, 0.03)
              }

              .articleTitle:after {
                content: "";
                width: 1.6rem;
                height: .3vh;
                display: flex;
                background: var(--blue);
                margin-top: .5vh;
              }

              .articleSummery {
                font-size: .9vw;
                margin-bottom: 7vh;
                line-height: 2.8vh;
              }

              .articleImage {
                position: relative;
                width: 63%;
                height: 80%;
              }

              .articleImageMood2 {
                display: flex;
                align-content: center;
                justify-content: end;
              }

              .articleImageSideText {
                position: absolute;
                right: -12%;
                top: 12%;
                transform: rotate(-90deg);
                color: var(--gray)
              }

              .articleImageSideTextMood2 {
                position: absolute;
                left: 24%;
                top: 12%;
                transform: rotate(-90deg);
                color: var(--gray)
              }

              .articleImage img {
                height: 100%;
              }
            `}</style>
        </div>
    );
}

export default Article;