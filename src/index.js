import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './index.css';
import FullRoster from './components/FullRoster';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Player from "./components/Player";
import { Provider } from 'react-redux';
import { createStore } from 'redux';

function add(state ={ count: 0}, action){
    const count = state.count;
    switch (action.type){
        case 'increase':
            console.log('increase');
            return { count: count + 1 }
        default:
            console.log('default');
            return state;
    }
}

const store = createStore(add);

const route = (
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <App/>
                <Switch>
                    <Route exact path="/roster" component={FullRoster} />
                    <Route path="/roster/:number" component={Player} />
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(route, document.getElementById('root'));
registerServiceWorker();
