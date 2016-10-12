import { FavoritesActions } from '../../actions/favorites.actions';
import { Track } from '../../model/track';
import { INITIAL_STATE } from './favorites.initial-state';

export function favoritesReducer(state: Track[] = INITIAL_STATE, action: any): Track[] {

  switch (action.type) {
    case FavoritesActions.ADD_ITEM:
      return [...state, action.item];
    case FavoritesActions.REMOVE_ITEM:
        let newState = state.filter( track => track.id != action.id);
      return newState;
    default:
      return state;
  }
}