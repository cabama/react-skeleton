import * as React from "react";
import { render } from 'react-dom'
import { createStore, Store } from 'redux';
import { Provider, connect } from 'react-redux'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import { defaultStore, AppStore } from './redux/store/defaultStore';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


import { numberReducer } from './redux/reducers/numericReducer';

import Main from './containers/Main'
import { Hello } from './components/hello';

export class App extends React.Component {

  private store: Store<AppStore>

  constructor(props: any, state: any) {
    super(props, state)
    this.store = createStore(numberReducer, defaultStore) as Store<AppStore>
    console.log('Store Init: ', this.store)
  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <Provider store={this.store}>
            <Router>
              <div>
                <Route exact path='/' component={Main} />
                <Route exact path='hello' component={Hello} />
              </div>
            </Router>
          </Provider>
        </MuiThemeProvider>
      </div>
    )
  }

}
