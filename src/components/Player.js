import React, { Component } from 'react';

class Player extends Component{
    render(){
        return (
            <h3>this is Player named {this.props.match.params.number}</h3>
        )
    }
}



export default Player;