// @flow
import React from 'react'
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'
import Opcion from './Opcion'
import UnitSelector from './UnitSelector'
import AddProductButton from './AddProductButton'

type HomeType = {
  numberOfProducts: number
}
const Home = ({ numberOfProducts }: HomeType) => {
  return (
    <div>

      <UnitSelector />

      <form>
        {
          [...Array(numberOfProducts)].map((e, i) => <Opcion key={i} productId={i} />)
        }
      </form>

      <AddProductButton />

    </div>
  )
}

const mapStateToProps = state => ({
  numberOfProducts: state.products.number
})

export default connect<any, any, any, any, any, any>(mapStateToProps)(Home)
