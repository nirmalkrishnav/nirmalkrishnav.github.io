import React from 'react';
import './Left.css';
import Bio from './../bio/Bio';

class Left extends React.Component {
    master = [
        `Hey`,
        `I'm Nirmal`,
        `I love creating products,
        taking up new challenges and learning new stuff`,
        `I create side projects to learn new libraries/framework`,
        `and I write what I learnt on dev.to `,
        `       `,
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
                    <code>pitch.ts:</code>
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