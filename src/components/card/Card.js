import React from 'react';
import './Card.css';

function Card() {

    return (
        <div className="card bg-dark m-3">
            <div className="card-body">
                <h5 className="card-title">Project Title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>

    )
}

export default Card;