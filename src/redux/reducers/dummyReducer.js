// @flow
import { type State, type Action } from '../reducers'

const initialState = {}

const dummyReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    default:
      return state
  }
}

export default dummyReducer
