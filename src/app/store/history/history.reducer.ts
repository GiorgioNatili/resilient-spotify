import { HistoryActions } from '../../actions/history.actions';
import { SearchItem } from '../../model/searchItem';
import { INITIAL_STATE } from './history.initial-state';

export function historyReducer(state: SearchItem[] = INITIAL_STATE, action:any): SearchItem[] {
  switch (action.type) {
    case HistoryActions.ADD_ITEM:
      state.push(action.item);
      return state;
    default:
      return state;
  }
}