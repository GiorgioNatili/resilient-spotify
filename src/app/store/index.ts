import { combineReducers } from 'redux';
import {createStore, applyMiddleware} from "redux";
const persistState = require('redux-localstorage');
import { IAppState } from '../model/appState';
import { historyReducer as history } from './history/history.reducer';
import { favoritesReducer as favorites } from './favorites/favorites.reducer';
import { appStateLogger } from './logger';
import { defaultState } from './app.initial-state';

export const rootReducer = combineReducers<IAppState>({

  history: history,
  favorites: favorites
});

export const enhancers = [
  persistState('lastSearch', { key: 'ng2-redux/examples/lastSearch' })
];

const createStoreWithMiddleware = applyMiddleware(appStateLogger)(createStore);
export const rootStore = createStoreWithMiddleware(rootReducer, defaultState);
