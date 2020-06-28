import React from 'react';

function Bio() {
    return (
        <div>

        <p>
            I’m a Software Engineer currently working in EY. I mostly do front-end development with Angular and React.
            I love javascript, but Typescript is my Fwb.
           
        </p>
        <ul className="nav social-links">
            <li className="nav-item">
                <a className="nav-link" href="https://github.com/nirmalkrishnav">GitHub</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="https://twitter.com/meuequalsD">Twitter</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="https://www.linkedin.com/in/nirmal-krishna/">LinkedIn</a>
            </li>
        </ul>
        </div>  
    )
}

export default Bio;