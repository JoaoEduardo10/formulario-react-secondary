import { createContext, useReducer } from "react";

export const Context = createContext()

import { data } from './data'
import { reducer } from "./reducer";

export const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, data)

  return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
}
