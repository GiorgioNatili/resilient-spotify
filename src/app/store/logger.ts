import * as createLogger from "redux-logger";
import { IAppState } from '../model/appState';

export const appStateLogger = createLogger({
  stateTransformer: (state: IAppState) => {

    return {
      history:      JSON.stringify(state.history),
      favorites:    JSON.stringify(state.favorites)
    };
  }
});
