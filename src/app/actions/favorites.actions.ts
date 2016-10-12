import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../model/appState';
import { Track } from '../model/track';

@Injectable()
export class FavoritesActions {

  static ADD_ITEM: string = 'ADD_FAVORITE_ITEM';
  static REMOVE_ITEM: string = 'REMOVE_FAVORITE_ITEM';

  constructor (private ngRedux: NgRedux<IAppState>) {}

  addItem(item: Track): void {
    this.ngRedux.dispatch({ type: FavoritesActions.ADD_ITEM, item });
  }

  removeItem(id: number): void {
    this.ngRedux.dispatch({ type: FavoritesActions.REMOVE_ITEM, id });
  }
}