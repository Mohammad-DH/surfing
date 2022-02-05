import React from 'react';
import Article from "./article";

function Articles() {
    return (
        <div className="articles">
            <Article title="surf training" image="/article1.jpg" url="#" number="01" mood="1"
                     summery="By better understanding the various aspects of surfing, By better understanding the various aspects of surfing, you will improve faster and have more fun in the water."
            />
            <Article title="surf training" image="/article2.jpg" url="#" number="02" mood="2"
                     summery="By better understanding the various aspects of By better understanding the various aspects of surfing, By better understanding the various aspects of surfing, you will improve faster and have more fun in the water."
            />
            <style jsx>{`
              .articles {
                margin-bottom: 8vh;
              }
            `}</style>
        </div>
    );
}

export default Articles;