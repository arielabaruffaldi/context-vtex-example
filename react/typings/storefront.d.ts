import { FunctionComponent } from 'react'

declare global {
  interface CountContext {
    count: number;
  }

  interface CategoriesContext {
    categories: any[];
  }
}
