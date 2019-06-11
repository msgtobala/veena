
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import Home from './component/Home';
import Videos from './component/Videos';
import Shop from './component/Shop';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom";


// const rootReducer = combineReducers({

// });

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const logger = store => {
//     return next => {
//         return action => {
//             console.log("[Middle Ware] Dispatching", action)
//             const result = next(action)
//             console.log("[Middle Ware]",store.getState());  
//             return result;
//         }
//     }
// }

// const store = createStore();

// ReactDOM.render(<Provider ><App/></Provider>, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
