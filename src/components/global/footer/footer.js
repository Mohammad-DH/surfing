import React from 'react';
import SocialMedia from "../socialMedia/socialMedia";

function Footer() {
    return (
        <div className="footer">
            <img className="footerLogo" src="./logo.png" alt=""/>
            <div className="footerLinks">
                <a href="#" className="typeOne simpleLink">stories</a>
                <a href="#" className="typeOne simpleLink">events</a>
                <a href="#" className="typeOne simpleLink">places</a>
                <a href="#" className="typeOne simpleLink">boards</a>
            </div>
            <SocialMedia alignment="horizontal"/>
            <style jsx>{`
              .footer {
                width: 100%;
                height: 20vh;
                margin: 10vh 0;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-between;
              }

              .footerLogo {
                width: 1.1vw;
                animation:logoAnimation 8s linear infinite;
              }

              .footerLinks {
                width: 35%;
                display: flex;
                align-items: center;
                justify-content: space-evenly;
              }
            `}</style>
        </div>
    );
}

export default Footer;