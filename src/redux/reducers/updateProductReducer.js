// @flow
import { type Action } from '.'
import { UPDATE_PRODUCT, INCREMENT_PRODUCTS, DELETE_PRODUCT } from '../../utils/constants'

const defaultProduct = {
  multiplier: 1,
  quantity: 1,
  cost: 0,
  total: 0
}

const initialState = {
  products: {
    0: defaultProduct,
    1: defaultProduct
  },
  cheapest: 0
}

type State = typeof initialState

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
      const maxId = Object.keys({ ...state.products }).reduce((prev, curr) => prev > curr ? prev : curr)

      return {
        ...state,
        products: {
          ...state.products,
          [parseInt(maxId) + 1]: defaultProduct
        }
      }
    }

    case DELETE_PRODUCT: {
      const { [action.productId]: removedElement, ...restProducts } = state.products

      // $FlowFixMe // Obtains the min from all the product totals
      const cheapest = Object.values(restProducts).reduce((prev, curr) => curr.total === 0 || prev.total < curr.total ? prev : curr).total

      return {
        ...state,
        products: restProducts,
        cheapest
      }
    }

    default:
      return state
  }
}
