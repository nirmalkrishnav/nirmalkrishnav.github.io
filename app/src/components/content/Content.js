import React from 'react';
import Card from './../card/Card';

function Content() {
    const cards = [1, 2, 3];

    return (
        <div>
            {cards.map((val, index) => {
                return <Card key={index} />
            })}
        </div>
    );
}

export default Content;