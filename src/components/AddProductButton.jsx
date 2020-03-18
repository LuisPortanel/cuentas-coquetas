// @flow
import React from 'react'
import { connect } from 'react-redux'
import { INCREMENT_PRODUCTS } from '../utils/constants'

type AddProductButtonType = {
    incrementProducts: any
}

const AddProductButton = ({ incrementProducts }: AddProductButtonType) =>
  <div className="row justify-content-center">
    <button type="button" className="btn my-4 aqua-gra dient" style={{ background: 'linear-gradient(40deg, #65c8c6, #65c8c6)' }} onClick={incrementProducts}>Agregar producto</button>
  </div>

const mapDispatchToProps = dispatch => ({
  incrementProducts: () => dispatch({ type: INCREMENT_PRODUCTS })
})

export default connect<any, any, any, any, any, any>(null, mapDispatchToProps)(AddProductButton)
