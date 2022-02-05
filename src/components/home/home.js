import React, {useEffect} from 'react';
import Hero from "./hero/hero";
import Quote from "./quote/quote";
import Divider from "../global/divider/divider";
import Media from "./media/media";
import Shop from "./shop/shop";
import Articles from "./article/articles";
import Subscribe from "./subscribe/subscribe";
import Contact from "./contact/contact";
import Footer from "../global/footer/footer";
import {animation} from "../animation/animation";

function Home(props) {

    useEffect(() => {
        animation()
    }, []);

    return (
        <div className="home">
            <Hero/>
            <Quote/>
            <Divider/>
            <Media/>
            <Shop/>
            <Articles/>
            <Divider/>
            <Subscribe/>
            <Contact />
            <Footer/>
        </div>
    );
}

export default Home;