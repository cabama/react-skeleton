import {defaultStore} from "../store/defaultStore";

export const visibilityReducer = (state = defaultStore, action: any) => {
  switch (action.type) {
    case 'VISIBLE':
      return {
        ...state,
        visible: !state.visible
      }
    default:
      return state
  }
}