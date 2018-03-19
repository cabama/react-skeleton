import {defaultStore} from "../store/defaultStore";

export const numberActions = {
  ADD: 'ADD',
  SUBTRACK: 'SUBTRACK'
}

export const numberReducer = (state = defaultStore , action: any ) => {
  switch (action.type) {
    case numberActions.ADD:
      return {
        ...state,
        counter: state.counter + 1
      }

    case numberActions.SUBTRACK:
      return {
        ...state,
        counter: state.counter - 1
      }

    default:
      return state
  }
}