import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Player extends Component{
    render(){
        return (
            <h3>this is Player named {this.props.match.params.number}</h3>
        )
    }
}

Player.propTypes = {
    number: PropTypes.number
}

export default Player;