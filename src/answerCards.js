import React, { Component } from 'react';

class answerCards extends Component {
    constructor(props) {
        super(props)

        this.renderBody = this.renderBody.bind(this);
    }

    renderBody() {
        return (
            <div className="row">
                <div className="card">
                    <div className="container">
                        <div className="card-title">{this.props.cards.body.title}</div>
                        <div dangerouslySetInnerHTML={{__html: this.props.cards.body.description}}></div>    
                    </div>
                </div>
            </div>
        )
    }

    renderOptions() {
        const options = [];

        this.props.cards.options.forEach((option, i) => {
            options.push(
                <div className="card col s12 m6 center-align" key={i}>
                    <div onClick={() => this.props.onClick(option.nextType, option.nextId)}>
                        <div className="card-title">{option.title}</div>
                        <p dangerouslySetInnerHTML={{__html: option.description}}></p>
                    </div>
                </div>)
        });

        return options;
    }

    render() {
        // If there are no cards
        if (!this.props.cards) {
            return <div></div>;
        }

        return (
            <div className="container">
                <div className="card-title">{this.props.cards.title}</div>
                <div dangerouslySetInnerHTML={{__html: this.props.cards.description}}></div>    
            </div>
        )
    }
}

export default answerCards;