import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './index.css';
import FullRoster from './components/FullRoster';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Player from "./components/Player";

const route = (
    <BrowserRouter>
        <div>
            <App/>
            <Switch>
                <Route exact path="/roster" component={FullRoster} />
                <Route path="/roster/:number" component={Player} />
            </Switch>
        </div>
    </BrowserRouter>
);

ReactDOM.render(route, document.getElementById('root'));
registerServiceWorker();
