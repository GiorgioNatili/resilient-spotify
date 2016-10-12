import { AppState } from '../model/appState';
import { SearchItem } from '../model/searchItem';
import { Track } from '../model/track';

export const defaultState: AppState = { history: <SearchItem[]>[],
                                        favorites: <Track[]>[], lastSearch: '' };
