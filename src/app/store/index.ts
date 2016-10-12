import { combineReducers } from 'redux';
import {createStore, applyMiddleware} from "redux";
const persistState = require('redux-localstorage');
import { IAppState } from '../model/appState';
import { historyReducer } from './history/history.reducer';
import { favoritesReducer } from './favorites/favorites.reducer';
import { appStateLogger } from './logger';
import { defaultState } from './app.initial-state';

export const rootReducer = combineReducers<IAppState>({

  history: historyReducer,
  favorites: favoritesReducer
});

export const enhancers = [
  persistState('lastSearch', { key: 'resilient/angular/example/lastSearch' })
];

const createStoreWithMiddleware = applyMiddleware(appStateLogger)(createStore);
export const rootStore = createStoreWithMiddleware(rootReducer, defaultState);
