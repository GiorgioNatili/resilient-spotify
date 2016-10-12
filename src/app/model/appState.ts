import { SearchItem } from './searchItem';
import { Track } from './track';

export interface IAppState {

  history?: SearchItem[];
  favorites?: Track[];
  lastSearch?: string;
};

export class AppState implements IAppState {

  history: SearchItem[];
  favorites: Track[];
  lastSearch: string;
  
  constructor() {}
}
