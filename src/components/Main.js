import React, { Component } from 'react';
import { connect } from 'react-redux';

class Main extends Component{
    render(){
        const { value, onIncreaseClick } = this.props;
        return (
            <div>
                <span>{value}</span>
                <button onClick={onIncreaseClick}>+</button>
            </div>
        )
    }
}
const increaseAction = {type: 'increase'}

function mapStateToProps(state){
    return {
        value: state.count
    }
}

function mapDispatchToProps(dispatch){
    return {
        onIncreaseClick: () => dispatch(increaseAction)
    }
}

const Add = connect(
    mapStateToProps,
    mapDispatchToProps
)(Main)


export default Add;