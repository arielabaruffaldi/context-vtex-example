import React, { useReducer } from 'react'
import { CategoriesReducer } from '../reducers/CategoriesReducer';

const initialState = {
  categories: []
}

export const CategoriesContext = React.createContext<{
  state: CategoriesContext;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null
})


export const CategoriesProvider: React.FunctionComponent = ({ children }: any) => {
  const [state, dispatch] = useReducer(CategoriesReducer, initialState);
  return (
    <CategoriesContext.Provider value={{ state, dispatch }}>
      {children}
    </CategoriesContext.Provider>
  )
}
