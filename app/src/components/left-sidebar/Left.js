import React from 'react';
import './Left.css';
import Bio from './../bio/Bio';

class Left extends React.Component {
    master =
        `Hello, I'm Nirmal Krishna              |
    Hallo, ich heiße Nirmal Krishna             |
    Bonjour, je m'appelle Nirmal Krishna        |
    வணக்கம் நான் நிர்மல் கிருஷ்ணா         |`;

    greetings = '';
    state = { text: [] }
    timer;
    index = 0;
    escapeChar = '|';

    componentDidMount = () => {
        this.cliEffect();
    }

    cliEffect = () => {
        this.greetings = this.master;
        this.index = 0;




        this.timer = setInterval(() => {
            if (this.greetings[this.index] !== this.escapeChar) {
                const arr = this.state.text;
                arr.push(this.greetings[this.index]);
                this.setState({ text: arr })
            } else {
                this.setState({ text: [] });
            }
            this.index++

            if (this.index >= this.master.length) {
                clearInterval(this.timer);
                this.cliEffect();
            }

        }, 100)

    }



    render() {
        return (
            <div className="left align-items-start d-flex flex-column justify-content-around p-3">
                <div className="name">
                    <h2>{this.state.text}</h2>
                </div>
                <div>
                    <Bio />
                </div>
            </div>

        )
    }
}

export default Left;