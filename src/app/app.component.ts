import { Component } from '@angular/core';
import { DevToolsExtension, NgRedux } from 'ng2-redux';
import { IAppState } from './model/appState';
import { rootReducer, rootStore, enhancers } from './store';
import { defaultState } from './store/app.initial-state';
import { appStateLogger } from './store/logger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'app works!';

  constructor(private ngRedux: NgRedux<IAppState>,
              private devTool: DevToolsExtension) {

    this.ngRedux.configureStore(
      rootReducer,
      defaultState,
      [ appStateLogger ],
      [ ...enhancers, devTool.enhancer()]);
  }      
}
