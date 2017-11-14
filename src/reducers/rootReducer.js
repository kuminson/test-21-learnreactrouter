import { combineReducers } from 'redux-immutable';
import todo from './todoReducers';

const rootReducer = combineReducers({
    todo
});

export default rootReducer;