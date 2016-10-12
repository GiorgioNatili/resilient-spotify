import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../model/appState';
import { SearchItem } from '../model/searchItem';

@Injectable()
export class HistoryActions {

  static ADD_ITEM: string = 'ADD_HISTORY_ITEM';

  constructor (private ngRedux: NgRedux<IAppState>) {}

  addItem(item: SearchItem): void {
    this.ngRedux.dispatch({ type: HistoryActions.ADD_ITEM, item });
  }
}