import * as React from "react";

// Redux Setup
import { connect } from 'react-redux';
import { AppStore, defaultStore } from "../redux/store/defaultStore";
import { numberActions } from '../redux/reducers/numericReducer';

// Material Components
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';

// Import Local Style
import * as s from './style.less';

// Another Components
import { Hello } from '../components/hello'

// Adapter for fetch
import analyticsRequest from '../adapters/analyticsRequest'

// Typed Props
export interface mainStore {
  counter: number,
}
export interface MainProps {
  counter_add: Function,
  state: mainStore,
}

export class MainDom extends React.Component<MainProps, {}> {

  constructor(props: any, state: AppStore) {
    super(props, state);
  }

  componentDidMount() {
    analyticsRequest().then((response) => {
      return response.json()
    })
      .then((recurso) => {
        console.log(recurso)
      })
  } 


  render() {
    return (
      <div>
        <h1>Prueba de Concepto 5t.</h1>
        <div>{JSON.stringify(this.props.state.counter)}</div>
        <button className={s.button} onClick={() => { this.props.counter_add(numberActions.ADD) }}>SUMAR</button>
        <button onClick={() => { this.props.counter_add(numberActions.SUBTRACK) }}>RESTAR</button>
        <RaisedButton label="Oh my god" primary={true}/>
      </div>
    )
  }
}

// SetUp Redux in Props
const mapStateToProps = (state: any) => {
  return {
    state: {
      ...state
    }
  }
}
const mapDispatchToProps = (dispatch: any) => {
  return {
    counter_add: (type: string) => dispatch({
      type
    })
  }
}

// Connect Component to the Store
export default connect(mapStateToProps, mapDispatchToProps)(MainDom)