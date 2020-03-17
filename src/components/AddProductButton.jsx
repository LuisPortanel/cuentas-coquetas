// @flow
import React from 'react'
import { connect } from 'react-redux'
import { INCREMENT_PRODUCTS } from '../utils/constants'

type AddProductButtonType = {
    incrementProducts: any
}

const AddProductButton = ({ incrementProducts }: AddProductButtonType) =>
  <button type="button" className="btn btn-lg btn-block my-4" style={{ backgroundImage: 'linear-gradient(40deg,#2096ff,#05ffa3)', color: 'white' }} onClick={() => incrementProducts()}>Agregar producto</button>

const mapDispatchToProps = dispatch => ({
  incrementProducts: () => dispatch({ type: INCREMENT_PRODUCTS })
})

export default connect<any, any, any, any, any, any>(null, mapDispatchToProps)(AddProductButton)
