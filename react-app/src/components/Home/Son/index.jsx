import React, { Component } from 'react';

class Homeson extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <button onClick = {this.props.onClick}>惦记我</button>
            </div>
        );
    }
}

export default Homeson;