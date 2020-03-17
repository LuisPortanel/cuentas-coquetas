// @flow
import { combineReducers } from 'redux'
import changeUnitsReducer from './changeUnitsReducer'
import updateProductReducer from './updateProductReducer'

const reducers = {
  units: changeUnitsReducer,
  products: updateProductReducer
}

export type State = typeof reducers

export type Action = {
  +type: string,
  units: string,
  payload: any
  /*,
  payload: {
    id: number,
    next: string,
    previous: string,
    results: Array<string>
  },
  pokemon: Array<string> */
}

export default combineReducers<any, any>(reducers)
