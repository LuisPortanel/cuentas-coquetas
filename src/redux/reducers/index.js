// @flow
import { combineReducers } from 'redux'
import dummyReducer from './dummyReducer'

const reducers = {
  dummy: dummyReducer
}

export type State = typeof reducers

export type Action = {
  +type: string,
  loadMoreUrl: string,
  payload: {
    id: number,
    next: string,
    previous: string,
    results: Array<string>
  },
  pokemon: Array<string>
}

export default combineReducers<any, any>(reducers)
