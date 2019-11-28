import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'mobx-react';
import store from "./mobx/store.js"


ReactDOM.render(
    <Provider {...store}>
        <App />
    </Provider>
    
, document.getElementById('root'));

serviceWorker.unregister();
