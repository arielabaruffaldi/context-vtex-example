import React, { createContext, useReducer } from 'react';
import { countReducer } from './../reducers/countReducer';

const initialState = {
  count: 0,
}

export const CountContext = createContext<{
  state: CountContext;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null
});

export const CountProvider: React.FC = ({ children }: any) => {
  const [state, dispatch] = useReducer(countReducer, initialState);

  return (
    <CountContext.Provider value={{ state, dispatch }}>
      {children}
    </CountContext.Provider>
  )
}
