import React from 'react';
import RootReducers from './reducers/root.reducers.js';
import { createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

export const store = createStore(
    root.reducers,{},compose(applyMiddleware(thunk))
);