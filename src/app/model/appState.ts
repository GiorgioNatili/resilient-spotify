import { SearchItem } from './searchItem';
import { Track } from './track';

export interface IAppState {

  history?: SearchItem[];
  favorites?: Track[];
};

export class AppState implements IAppState {

  history: SearchItem[];
  favorites: Track[];

  constructor() {}
}
