import React, { Component } from 'react';

class QuestionCards extends Component {
    constructor(props) {
        super(props)

        this.renderBody = this.renderBody.bind(this);
        this.renderOptions = this.renderOptions.bind(this);

        this.state = this.props.newCards ? { classNames: "new-cards", newCards: this.props.newCards } : { classNames: "", newCards: this.props.newCards };
    }

    componentDidMount () {
        if (this.state.newCards) {
            this.setState({ classNames: "new-cards show"})
        }
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
                <div className="center-align card col s12 m6" key={i}>
                    <div onClick={() => this.props.onClick(option.nextType, option.nextId, i)}>
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
            <div className={this.state.classNames}>
                {this.renderBody()}
                <div className="card-content center-align">
                    <div className="center-align">
                        <div className="row">
                            {this.renderOptions()}
                        </div>
                    </div>
                </div>        
            </div>
        )
    }
}

export default QuestionCards;