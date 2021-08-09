import React, { Component } from 'react';
import Counter from "./counter";
import ResetCount from "./resetCount";

class Counters extends Component {
    state = {
        counters: [
            { id: 1, value: 0 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 }
        ]
    };

    render() {
        return (
            <div>
                <ResetCount />
                {this.state.counters.map(counter => <Counter key={counter.id} value={counter.value} selected={true} />)}
            </div>
        );
    }
}

export default Counters;