import React from 'react';
import { render } from 'react-dom';

import { store } from './store/store.js'
import './index.css';
import { Provider } from 'react-redux';
import App from './components/App.js';
import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));
render (
    <Provider store={store}>
        <App/>
        </Provider>,
        document.getElementById('mount')
)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
