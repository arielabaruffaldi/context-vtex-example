import React from 'react'
import { CountProvider } from './contexts/CountContext'
import { CategoriesProvider } from './contexts/CategoriesContext'
import Counter from './Counter'
import CategoriesList from './CategoriesList'

const ContextTest: React.FunctionComponent = () => {
  return (
    <CountProvider>
      <CategoriesProvider>
        <Counter />
        <CategoriesList />
      </CategoriesProvider>
    </CountProvider>
  )
}

export default ContextTest
