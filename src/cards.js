import React, { Component } from 'react';

class Cards extends Component {
    constructor(props) {
        super(props)

        this.renderBody = this.renderBody.bind(this);
        this.renderOptions = this.renderOptions.bind(this);
    }

    renderBody() {
        return (
            <div>
                <div>{this.props.cards.body.title}</div>
                <div dangerouslySetInnerHTML={{__html: this.props.cards.body.description}}></div>
            </div>
        )
    }

    renderOptions() {
        const options = [];

        for (let option of this.props.cards.options) {
            options.push(<div onClick={() => this.props.onClick(option.nextType, option.nextId)}>
                            <div>{option.title}</div>
                            <div dangerouslySetInnerHTML={{__html: option.description}}></div>
                         </div>)
        }

        return options;
    }

    render () {
        // If there are no cards
        if (!this.props.cards) {
            return <div></div>;
        }

        return (
            <div>
                {this.renderBody()}
                {this.renderOptions()}        
            </div>
        )
    }
}

export default Cards;