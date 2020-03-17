import React from 'react'
// import { Link } from 'react-router-dom'
import Opcion from './Opcion'
import UnitSelector from './UnitSelector'

const Home = () => {
  return (
    <div>
      <h1 className="py-3">Cuentas Coquetas</h1>

      <UnitSelector />

      <form>
        <Opcion productId="0"/>
        <Opcion productId="1"/>
        <Opcion productId="2"/>
        <Opcion productId="3"/>
        <Opcion productId="4"/>
        <Opcion productId="5"/>
        <Opcion productId="6"/>
        <Opcion productId="7"/>
        <Opcion productId="8"/>
        <Opcion productId="9"/>
      </form>

    </div>
  )
}

export default Home
