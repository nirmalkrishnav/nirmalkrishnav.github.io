import React from 'react';
import './Left.css';
import Bio from './../bio/Bio';

class Left extends React.Component {
    master = [
        `Hey`,
        `I'm Nirmal Krishna`,
        `I was 🤩 when I was able to do an effect like this`,
        `with almost no google..`,
        `Alright I did search on how to center a div vertically😬`,
        `Yet I came up with this effect in less than an hour`,
        `And that is why you should Hire me😊`,
        `PS: This is not a 2010's YouTube tutorial with an Indian guy on a notepad`,
        `Okay from the top`
    ];

    state = { text: [] }
    timer;
    index = 0;
    escapeChar = '|';

    componentDidMount = () => {
        this.master = [`...`, ...this.master];
        this.cliEffect();
    }

    cliEffect = () => {
        this.greetings = this.master;
        this.index = 0;


        this.master.reduce(
            (p, x) => p.then(_ => this.typer(x)),
            Promise.resolve()
        ).then(r => this.cliEffect());

    }

    typer = (message) => {
        return new Promise((resolve, reject) => {
            this.index = 0;
            this.setState({ text: [] })

            this.timer = setInterval(() => {

                const arr = this.state.text;
                arr.push(message[this.index]);
                this.setState({ text: arr })

                this.index++

                if (this.index >= message.length) {
                    clearInterval(this.timer);
                    setTimeout(() => {
                        resolve(true);
                    }, 2000)
                }

            }, 60)
        });

    }

    render() {
        return (
            <div className="left align-items-start d-flex flex-column justify-content-around p-3">
                <div className="name">
                    <code>pitch.js:</code>
                    <h4>{this.state.text}</h4>
                </div>
                <div>
                    <Bio />
                </div>
            </div>

        )
    }
}

export default Left;