import React, { useContext, useEffect } from 'react'
import { CategoriesContext } from './contexts/CategoriesContext'
import getCategoriesGQL from './graphql/getCategories.gql'
import { useQuery } from 'react-apollo'
import { CountContext } from './contexts/CountContext'


const CategoriesList: React.FunctionComponent = () => {
  const { state, dispatch } = useContext(CategoriesContext)
  const { state: stateCount } = useContext(CountContext)

  const { data, refetch } = useQuery(getCategoriesGQL, {
    variables: {
      pageSize: 2,
      page: stateCount.count,
      term: ""
    },
    ssr: false,
  })

  useEffect(() => {
    if (data) {
      dispatch({ type: 'SET_CATEGORIES', payload: data.categories.items })
    }
  }, [data])

  useEffect(() => {
    refetch()
  }, [stateCount.count])

  return (
    <>
      <h1>CategoriesList</h1>
      {state.categories.map(item => <li>{item.label}</li>)}
    </>
  )
}

export default CategoriesList
