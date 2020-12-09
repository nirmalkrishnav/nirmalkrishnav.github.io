import React from 'react';
import Card from './../card/Card';

function Content() {
    const cards = [
        {
            title: 'A Shopping cart',
            desc: 'React app that manages state by redux and hosted on heroku + Mongo atlas',
            tags: ['react', 'redux', 'express', 'mongo'],
            url: 'https://github.com/nirmalkrishnav/shopping-cart',
            activeDevelopment: true
        },
        {
            title: 'Flask dashboard',
            desc: 'A flask + Angular dashboard app to project randomly generated sensory data points from csv.',
            tags: ['Flask', 'Angular'],
            url: 'https://github.com/nirmalkrishnav/Flask-Dashboard'
        },
        {
            title: 'nirmalkrishnav.github.io',
            desc: 'My portfolio statically hosted in GHpages',
            tags: ['React', 'github pages'],
            url: 'https://github.com/nirmalkrishnav/nirmalkrishnav.github.io'
        },
    ];

    return (
        <div>
            {cards.map((val, index) => {
                return <Card key={index} project={val} />
            })}

            <div className="text-center m-5">
                <span className="fin">
                    Ende
            </span>
            </div>
        </div>
    );
}

export default Content;