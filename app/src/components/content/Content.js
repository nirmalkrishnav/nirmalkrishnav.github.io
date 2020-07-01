import React from 'react';
import Card from './../card/Card';

function Content() {
    const cards = [
        {
            title: 'Flask dashboard',
            desc: 'A flask + Angular dashboard app to project randomly generated sensory data points from csv.',
            tags: ['Flask', 'Angular'],
            url: 'https://github.com/nirmalkrishnav/Flask-Dashboard'
        },
        {
            title: 'nirmalkrishnav.github.io',
            desc: 'My portfolio statically hosted in GHpages',
            tags: ['React'],
            url: 'https://github.com/nirmalkrishnav/nirmalkrishnav.github.io'
        }
    ];

    return (
        <div>
            {cards.map((val, index) => {
                return <Card key={index} project={val} />
            })}
        </div>
    );
}

export default Content;