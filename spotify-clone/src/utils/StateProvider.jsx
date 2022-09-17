import { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

<<<<<<< HEAD
export const StateProvider = ({children,initialState,reducer}) => {
    <StateContext.Provider value = {useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
}
=======
export const StateProvider = ({children, initialState, reducer}) => (
    <StateContext.Provider value = {useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

export const useStateProvider = () => useContext(StateContext);
>>>>>>> errors_fixed
