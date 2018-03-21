import * as React from "react";
import { render } from 'react-dom'
import { createStore, Store } from 'redux';
import { Provider, connect } from 'react-redux'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

// Redux SetUp
import { defaultStore, AppStore } from './redux/store/defaultStore';
import { numberReducer } from './redux/reducers/numericReducer';
// Materia-UI SetUp
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// Containers && Components
import { Header } from './components/Header'
import Main from './containers/Main'
import { IndexPage } from './containers/Travel/IndexPage';

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
                <Route component={Header}/>
                <Route exact path='/' component={IndexPage} />
                <Route path='/hello' component={Main} />
              </div>
            </Router>
          </Provider>
        </MuiThemeProvider>
      </div>
    )
  }

}
