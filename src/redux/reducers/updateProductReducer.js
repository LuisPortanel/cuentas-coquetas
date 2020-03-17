// @flow
import { type Action } from '.'
import { UPDATE_PRODUCT, INCREMENT_PRODUCTS } from '../../utils/constants'

const initialState = {
  products: {},
  cheapest: {
    total: 0,
    productId: -1
  },
  number: 2
}

const baseProduct = {
  multiplier: 1,
  quantity: 1,
  cost: 0,
  total: 0
}

type State = typeof initialState

export default (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case UPDATE_PRODUCT: {
      const { productId, type, value } = action.payload

      // Creates the product using first the default, overwriting with the state values and then with the action value
      const product = {
        ...baseProduct,
        ...state.products[productId],
        [type]: parseFloat(value)
      }

      const total = product.cost / (product.multiplier * product.quantity)

      const cheapest = total > 0 && (total < state.cheapest.total || state.cheapest.total === 0)
        ? { productId, total }
        : { ...state.cheapest }

      return {
        ...state,
        products: {
          ...state.products,
          [productId]: {
            ...product,
            total
          }
        },
        cheapest
      }
    }

    case INCREMENT_PRODUCTS: {
      return {
        ...state,
        number: state.number + 1
      }
    }

    default:
      return state
  }
}
