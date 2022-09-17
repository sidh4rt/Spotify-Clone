import { createContext, useContext, useReducer } from "react";

export const StateContex = createConext();

export const StateProvider = ({children,initialState,reducer}) => {
    <StateContex.Provider value = {useReducer(reducer, initialState)}>
        {children}
    </StateContex.Provider>
}