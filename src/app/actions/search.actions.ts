
import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../model/appState';

@Injectable()
export class SearchActions {

  static SAVE_LAST_SEARCH: string = 'SAVE_LAST_SEARCH';

  constructor (private ngRedux: NgRedux<IAppState>) {}

  updateSearch(item: string): void {
    this.ngRedux.dispatch({ type: SearchActions.SAVE_LAST_SEARCH, item });
  }
}