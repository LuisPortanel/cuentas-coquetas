// @flow
import { type Action } from '.'
import { CHANGE_UNITS } from '../../utils/constants'

const initialState = {
  units: 'gr'
}

type State = typeof initialState

export default (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case CHANGE_UNITS:
      return { ...state, units: action.units }
    default:
      return state
  }
}
