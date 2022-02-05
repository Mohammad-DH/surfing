import React from 'react';

function Header() {
    return (
        <div className="Header">
            <img className="logo" src="./logo.png" alt=""/>

            <div className="navbar">
                <a href="#" className="typeOne simpleLink">stories</a>
                <a href="#" className="typeOne simpleLink">events</a>
                <a href="#" className="typeOne simpleLink">places</a>
                <a href="#" className="typeOne simpleLink">boards</a>
            </div>

            <style jsx>{`
              .Header {
                width: 100%;
                height: 17vh;
                display: flex;
                align-items: center;
                justify-content: start;
              }

              .logo {
                height: 35%;
                animation:logoAnimation 8s linear infinite;
              }
              .navbar{
                width: 100%;
                margin-left: 13vw;
                display: flex;
                align-items: center;
                justify-content: start;
              }

              .navbar a {
                  margin-right: 3rem;
              }
            `}</style>
        </div>
    );
}

export default Header;