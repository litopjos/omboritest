import {Provider} from "react-redux";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {create_store} from "./redux/createstore";
import App from './App';
import * as serviceWorker from './serviceWorker';

// Create the redux store. 
const store = create_store();

// Allow all the App components to have access
// to the redux store by enclosing the routes with 
// Redux's <Provider> element.
const jsx = (
    <Provider  store={store} >
        <App />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
