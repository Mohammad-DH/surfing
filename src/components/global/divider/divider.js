import React from 'react';

function Divider() {
    return (
        <div className="DividerBox">
            <div className="Divider"/>
            <style jsx>{`
              .DividerBox {
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: center
              }
              .Divider {
                width: .2vw;
                height: 12vh;
                background: var(--blue);
                border-radius: 100vw;
              }
            `}</style>
        </div>
    );
}

export default Divider;