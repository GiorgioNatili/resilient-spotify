import { SearchActions } from '../../actions/search.actions';
// import { INITIAL_STATE } from './favorites.initial-state';

export function searchReducer(state: string = '', action: any): string {

    switch (action.type) {
        case SearchActions.SAVE_LAST_SEARCH:
            return action.item;
        default:
            return state;
    }
}