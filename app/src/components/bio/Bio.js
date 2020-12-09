import React from 'react';

function Bio() {
    return (
        <div>
            <p>
                I’m a Software Engineer currently working with EY.<br />
                I love javascript. But, Typescript is my Fwb.<br />
                🐍 for backend, coffee for <code>!</code>tiredness.
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

                <li className="nav-item">
                    <a className="nav-link" href="https://dev.to/meuequalsd">dev.to</a>
                </li>

            </ul>
        </div>
    )
}

export default Bio;