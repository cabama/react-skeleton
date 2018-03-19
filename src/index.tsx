import * as React from "react";
import * as ReactDOM from "react-dom"
import { createStore } from 'redux'

import { Hello } from "./components/Hello"
import { App } from './app'

ReactDOM.render(
  <App />,
  document.getElementById("app")
);