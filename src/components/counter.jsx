import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: this.props.value,
    };

    handleIncrement = (id) => {
        if (id === 1) {
            this.setState({ count: this.state.count + 1 });
        } else if (id === 2) {
            this.setState({ count: this.state.count - 1 });
        }
    }


    render() {

        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button
                    onClick={(id) => this.handleIncrement(1)}
                    className="btn m-2 btn-secondary btn-sm ">+
                </button>
                <button
                    onClick={(id) => this.handleIncrement(2)}
                    className="btn m-2 btn-secondary btn-sm ">-
                </button>
            </div>
        );
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? "Zero" : count;
    }
    classes() {

    }
}

export default Counter;