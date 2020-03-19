// @flow
import React from 'react'
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'
import Product from './Product'
import UnitSelector from './UnitSelector'
import AddProductButton from './AddProductButton'

type HomeType = {
  numberOfProducts: number
}
const Home = ({ numberOfProducts }: HomeType) => {
  return (
    <>

      <UnitSelector />

      <form>
        {
          [...Array(numberOfProducts)].map((e, i) => <Product key={i} productId={i} />)
        }
      </form>

      <AddProductButton />

    </>
  )
}

const mapStateToProps = state => ({
  numberOfProducts: state.products.number
})

export default connect<any, any, any, any, any, any>(mapStateToProps)(Home)
