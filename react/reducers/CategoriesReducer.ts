export const CategoriesReducer = (state: CategoriesContext, action: any) => {
  switch (action.type) {
    case 'SET_CATEGORIES':
      return {
        ...state,
        categories: action.payload
      }
    default:
      return state;
  }
}
