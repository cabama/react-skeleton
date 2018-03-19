import { combineReducers } from 'redux'
import { numberReducer } from './numericReducer'
import { visibilityReducer } from './visibilityReducer';

export const reducers = () => combineReducers({
  numberReducer
})
