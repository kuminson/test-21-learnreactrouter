import React from 'react';
import ReactDom from 'react-dom';
import { connect } from 'react-redux';

import { changeText, createTodo } from "../actions/todoActions";

const mapStateToProps = (state) => ({
    todo: state.getIn(['todo', 'todo'])
});

const mapDispatchToProps = (dispatch) => ({
    onChangeText: (event)=> (
        dispatch(changeText({ text: event.target.value }))
    ),
    onCreateTodo: () => {
        dispatch(createTodo());
        dispatch(changeText({text:''}))
    }
});
