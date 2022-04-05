import React from 'react';
import './index.css';

function CardFlip() {
    return (
        <div className="mainContainer">
            <div className="theCard">
            <div className="Front"><img src="yugioh-backing.png" alt="TTT Logo" width="100%" height="100%"></img></div>
            <div className="Back"><img src="pokemon-backing.png" alt="TTT Logo" width="100%" height="100%"></img></div>
            </div>
        </div>
    )
}

export default CardFlip
