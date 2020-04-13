// @flow
import React from 'react'
import { connect } from 'react-redux'
import { UPDATE_PRODUCT, DELETE_PRODUCT } from '../utils/constants'
import { isUndefined } from 'lodash'
import './Product.scss'

type ProductType = {
    productId: number,
    units: string,
    updateProduct: any,
    deleteProduct: any,
    result: number,
    product: {
      multiplier: number,
      quantity: number,
      cost: number,
      total: number
    },
    cheapest: number
}

const selectAll = event => event.target.select()

const Product = ({ productId, product, cheapest, units, updateProduct, deleteProduct }: ProductType) => {
  const isCheapest = !isUndefined(product) && cheapest === product.total && cheapest > 0

  return (
    <div className={`Product form-row align-items-center justify-content-center py-3 px-1 ${isCheapest ? 'cheapest' : ''}`}>

      <p className="col-12 mb-2 d-flex justify-content-between"><span>Producto #{parseInt(productId) + 1}</span>{isCheapest && <span>¡Mejor opción!</span>}</p>

      <div className="col-auto form-row align-items-center multiplier">
        <div className="col-auto">
          <div className="input-group input-group-sm mb-2">
            <input
              type="number"
              className="form-control"
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
          <label>
            <span className="d-none d-sm-inline">producto{!isUndefined(product) && product.multiplier !== 1 ? 's' : ''} </span>con
          </label>
        </div>
      </div>

      <div className="col-auto form-row align-items-center quantity">
        <div className="col-auto">
          <div className="input-group input-group-sm">
            <input
              type="number"
              className="form-control"
              id={`cantidad${productId}`}
              step="0.1"
              min="0.1"
              defaultValue="1"
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

      <div className="col-auto form-row align-items-center cost">
        <div className="input-group input-group-sm mb-2">
          <div className="input-group-prepend">
            <div className="input-group-text">$</div>
          </div>
          <input
            type="number"
            className="form-control"
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
      <div className="col-12 my-2 mx-0 d-flex justify-content-between">
        <div className="">
          { !isUndefined(product) && product.total > 0 &&
            <>
            Costo por {
                units === 'gr' || units === 'kg' ? 'kilogramo' : (units === 'l' || units === 'ml' ? 'litro' : 'pieza')
              }:
              <b> ${ units === 'gr' || units === 'ml'
                ? parseFloat(product.total * 1000).toFixed(2)
                : parseFloat(product.total).toFixed(2)
              }</b>
            </>
          }
        </div>
        <button type="button" className="btn btn-link px-3 py-1 m-0 deleteProduct" onClick={() => deleteProduct(productId)} tabIndex="1" title="Eliminar producto">
          <i className="fas fa-trash-alt"></i>
        </button>
      </div>

    </div>
  )
}

const mapStateToProps = (state, props) => ({
  units: state.units.units,
  product: state.products.products[props.productId],
  cheapest: state.products.cheapest
})

const mapDispatchToProps = dispatch => ({
  updateProduct: payload => dispatch({ type: UPDATE_PRODUCT, payload }),
  deleteProduct: productId => dispatch({ type: DELETE_PRODUCT, productId })
})

export default connect<any, any, any, any, any, any>(mapStateToProps, mapDispatchToProps)(Product)
