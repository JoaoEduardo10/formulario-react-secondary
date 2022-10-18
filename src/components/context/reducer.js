import * as action from './actions'

export const reducer = (state, actions) => {
  switch (actions.type) {
    case action.LOGIN_UP:{
      return {...state, firstName: actions.payload.nameFisrt}
    }
  }


  return {...state}
}
