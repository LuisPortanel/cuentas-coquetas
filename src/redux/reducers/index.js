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
}

export default combineReducers<any, any>(reducers)
