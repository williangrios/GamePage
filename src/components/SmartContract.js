import React from 'react'
import './SmartContract.css'

function SmartContract() {
  return (
    <section className='box-container section-smart-contract'>
      <h1>Smart Contract Information</h1>
      <div className='table-information'>
        <div className='cell-info'>Players</div>
        <div className='cell-info'>Sold: 3123</div>
        <div className='cell-info'>Contr: 0x983292837d</div>
        <div className='cell-info'>Stadiums</div>
        <div className='cell-info'>Sold: 3213</div>
        <div className='cell-info'>Contr: 0x897239784</div>
      </div>
    </section>
  )
}

export default SmartContract