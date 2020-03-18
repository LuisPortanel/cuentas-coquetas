// @flow
import { type Action } from '.'
import { UPDATE_PRODUCT, INCREMENT_PRODUCTS } from '../../utils/constants'

const initialState = {
  products: {},
  cheapest: 0,
  number: 2
}

type State = typeof initialState

const defaultProduct = {
  multiplier: 1,
  quantity: 1,
  cost: 0,
  total: 0
}

export default (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case UPDATE_PRODUCT: {
      const { productId, type, value } = action.payload

      // Creates the product using first the default, overwriting with the state values and then with the action value
      const product = {
        ...defaultProduct,
        ...state.products[productId],
        [type]: parseFloat(value)
      }

      const products = {
        ...state.products,
        [productId]: {
          ...product,
          total: product.cost / (product.multiplier * product.quantity)
        }
      }

      // $FlowFixMe // Obtains the min from all the product totals
      const cheapest = Object.values(products).reduce((prev, curr) => curr.total === 0 || prev.total < curr.total ? prev : curr).total

      return {
        ...state,
        products,
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
