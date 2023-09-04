/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react"
import reducer from "./reducer"

const initialState = {
  loading: false,
  alert: {open: false, variant: 'danger', message: 'Testing Toaster', duration: 5000},
}

const Context = createContext(initialState)

export const useValue = () =>{
  return useContext(Context)
}

const ContextProvider = ({children}) => {

 const [state, dispatch] = useReducer(reducer, initialState);

    
  return (
    <Context.Provider value={{state, dispatch}}>
      {children}
    </Context.Provider> 
  )
}

export default ContextProvider