import React, { Component } from 'react';
import Counters from "./counters";
class ResetCount extends Component {
    state = {
        value: 0
    }

    resetState() {

    }

    render() {

        return (
            <div>
                <button onClick={this.resetState}
                    className="btn m-2 btn-secondary btn-sm ">
                    Reset
                </button>
            </div>
        );
    }
}

export default ResetCount;