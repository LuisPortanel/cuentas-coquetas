// @flow
import React from 'react'
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'
import Product from './Product'
import UnitSelector from './UnitSelector'
import AddProductButton from './AddProductButton'

type HomeType = {
  products: {}
}
const Home = ({ products }: HomeType) => {
  return (
    <>

      <UnitSelector />

      <form>
        {
          Object.keys(products).map((e, i) => <Product key={e} productId={e} />)
        }
      </form>

      <AddProductButton />

    </>
  )
}

const mapStateToProps = state => ({
  products: state.products.products
})

export default connect<any, any, any, any, any, any>(mapStateToProps)(Home)
