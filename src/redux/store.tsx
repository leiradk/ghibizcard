import { combineReducers } from 'redux';
import { Tuple, configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers';
import { thunk } from 'redux-thunk';

const rootReducer = combineReducers({ user: userReducer});

export const Store = configureStore({
    reducer: rootReducer,
    middleware: () => new Tuple(thunk), 
});