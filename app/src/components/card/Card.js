import React from 'react';
import './Card.css';

class Card extends React.Component {

    navigateToProject = () => {
        console.log(this.props);
    }

    render() {

        return (
            <a className="card bg-dark m-3 zoom" href={this.props.project.url}>
                <div className="card-body">
                    <div className="tags m-3">
                        {this.props.project.tags.map((t, i) => {
                            return <span className="pr-3" key={i}>{t}</span>
                        })}
                    </div>

                    <h5 className="card-title m-3">
                        {this.props.project.title}
                    </h5>
                    <p className="card-text m-3">{this.props.project.desc}</p>
                </div>
            </a>

        )
    }
}

export default Card;