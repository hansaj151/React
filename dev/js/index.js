import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import createLogger from 'redux-logger';
import allReducers from './reducers';
import App from './components/app';


const logger = createLogger();
const store = createStore(allReducers);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
