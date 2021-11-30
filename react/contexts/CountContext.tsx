import React, { createContext, useReducer } from 'react';
import { CountReducer } from '../reducers/CountReducer';

const initialState = {
  count: 1
}

export const CountContext = createContext<{
  state: CountContext;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null
});

export const CountProvider: React.FC = ({ children }: any) => {
  const [state, dispatch] = useReducer(CountReducer, initialState);

  return (
    <CountContext.Provider value={{ state, dispatch }}>
      {children}
    </CountContext.Provider>
  )
}
