// @flow
import React from 'react'
import { connect } from 'react-redux'
import { UPDATE_PRODUCT } from '../utils/constants'
import { isUndefined } from 'lodash'

type ProductType = {
    productId: number,
    units: string,
    updateProduct: any,
    result: number,
    product: {
      multiplier: number,
      quantity: number,
      cost: number,
      total: number
    },
    cheapest: {
      productId: number,
      total: number
    }
}

const selectAll = event => event.target.select()

const Product = ({ productId, product, cheapest, units, updateProduct }: ProductType) => {
  return (
    <div className={'form-row align-items-center justify-content-center py-3'} style={ cheapest.productId === productId ? { backgroundImage: 'linear-gradient(40deg,#45cafc,#303f9f)', color: 'white' } : {}}>

      <p className="col-12 mb-1">Producto #{parseInt(productId) + 1}</p>
      <div className="col-auto form-row align-items-center">
        <div className="col-auto">
          <div className="input-group input-group-sm mb-2">
            <input
              type="number"
              className="form-control"
              style={{ maxWidth: 50 }}
              step="0.1"
              min="0.1"
              defaultValue="1"
              onInput={e => updateProduct({
                value: e.target.value,
                productId,
                type: 'multiplier'
              })}
              onFocus={selectAll}
            />
          </div>
        </div>
        <div className="col-auto">
          <label>con</label>
        </div>
      </div>

      <div className="col-auto form-row align-items-center">
        <div className="col-auto">
          <div className="input-group input-group-sm m b-2">
            <input
              type="number"
              className="form-control"
              id={`cantidad${productId}`}
              style={{ maxWidth: 60 }}
              step="0.1"
              min="0.1"
              onInput={e => updateProduct({
                value: e.target.value,
                productId,
                type: 'quantity'
              })}
              onFocus={selectAll}
            />
            <label className="input-group-prepend" htmlFor={`cantidad${productId}`}>
              <div className="input-group-text">{units}</div>
            </label>
          </div>
        </div>
        <div className="col-auto">
          <label>por</label>
        </div>
      </div>

      <div className="col-auto">
        <div className="input-group input-group-sm mb-2">
          <div className="input-group-prepend">
            <div className="input-group-text">$</div>
          </div>
          <input
            type="number"
            className="form-control"
            style={{ maxWidth: 60 }}
            step="0.01"
            min="0.01"
            onInput={e => updateProduct({
              value: e.target.value,
              productId,
              type: 'cost'
            })}
            onFocus={selectAll}
          />
        </div>
      </div>
      { !isUndefined(product) && product.total > 0 &&
        <div className="col-12 text-right">
          <div>
            Costo por {
              units === 'gr' || units === 'kg' ? 'kilogramo' : (units === 'l' || units === 'ml' ? 'litro' : 'piezas')
            }:
            <b>${ units === 'gr' || units === 'ml' ? parseFloat(product.total * 1000).toFixed(2) : parseFloat(product.total).toFixed(2)}</b>
          </div>
        </div>
      }
    </div>
  )
}

const mapStateToProps = (state, props) => {
  console.log(state, props)
  return {
    units: state.units.units,
    product: state.products.products[props.productId],
    cheapest: state.products.cheapest
  }
}

const mapDispatchToProps = dispatch => ({
  updateProduct: payload => dispatch({ type: UPDATE_PRODUCT, payload })
})

export default connect<any, any, any, any, any, any>(mapStateToProps, mapDispatchToProps)(Product)
