import React from 'react';
import Link from "../../global/link/link";

function Contact() {
    return (
        <div className="contact">
            <div className="contactImage">
                <img src="/contact.jpg" alt=""/>
            </div>
            <div className="contactDetail">
                <span className="typeOne ">our camp</span>
                <span
                    className="typeTwo contactAddress">CA 91932, USA <br/>Imperial Beach <br/>560 Silver Strand Blvd</span>
                <div className="contactLink">
                    <Link text="get in touch" url="#" color="blue"/>
                </div>
            </div>
            <style jsx>{`
              .contact {
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                height: 60vh;
                margin-top: 15vh;
              }

              .contactImage {
                width: 50%;
              }

              .contactImage img {
                width: 100%;
              }

              .contactDetail {
                width: 50%;
                height: 70%;
                display: flex;
                flex-direction: column;
                align-items: start;
                justify-content: space-evenly;
              }

              .contactDetail span {
                color: var(--gray);
                margin-left: 3vw;
              }

              .contactLink {
                margin-left: 3vw;
              }

              .contactAddress {
                font-size: 2.2vw;
                padding: 1vh 0;
                padding-left: 3.5vw;
                font-weight: 800;
                color: var(--black) !important;
              }
            `}</style>
        </div>
    );
}

export default Contact;