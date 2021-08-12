import React, { Component } from 'react';
import Counter from "./counter";

class Counters extends Component {

    render() {
        return (
            <div>
                <main>
                <button
                    onClick={this.props.onReset}
                    className="btn btn-primary btn-sm m-4">Reset</button>
                <button
                    onClick={this.props.onPurchase}
                    className="btn btn-primary btn-sm m-4">Purchase</button>
                    </main>
                {this.props.counters.map(counter => (
                    <Counter
                        key={counter.id}
                        onDelete={this.props.onDelete}
                        onIncrement={this.props.onIncrement}
                        onDecrement={this.props.onDecrement}
                        counter={counter}
                    />
                ))}

            </div>
        );
    }
}

export default Counters;