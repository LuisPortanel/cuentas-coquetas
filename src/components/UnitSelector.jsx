// @flow
import React from 'react'
import { connect } from 'react-redux'
import { CHANGE_UNITS } from '../utils/constants'

const UnitSelector = ({ changeUnits }: {changeUnits: any}) => {
  return (
    <div className="input-group mb-4">
      <div className="input-group-prepend">
        <label className="input-group-text" htmlFor="change-units">Unidad</label>
      </div>
      <select className="custom-select" id="change-units" onChange={(e) => changeUnits(e.target.value)}>
        <option value="gr">gramos</option>
        <option value="kg">kilogramos</option>
        <option value="ml">mililitros</option>
        <option value="l">litros</option>
        <option value="pz">piezas</option>
      </select>
    </div>
  )
}
const mapDispatchToProps = dispatch => ({
  changeUnits: units => dispatch({ type: CHANGE_UNITS, units })
})

export default connect<any, any, any, any, any, any>(null, mapDispatchToProps)(UnitSelector)
