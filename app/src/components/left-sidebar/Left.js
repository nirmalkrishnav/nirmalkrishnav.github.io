import React from 'react';
import './Left.css';
import Bio from './../bio/Bio';

function Left() {
    return (
        <div className="left align-items-start d-flex flex-column justify-content-around p-5">
            <div className="name">
                <h2>Hello, I'm</h2>
                <h2>Nirmal Krishna.</h2>
            </div>
            <div>
                <Bio />
            </div>
        </div>

    )
}

export default Left;