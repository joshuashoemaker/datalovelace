import React, { Component } from 'react'
import './Nav.css'
import adaLovelaceLogo from  '../../img/adaLovelace.jpg'

class Nav extends Component {
  render = () => {
    return (
      <div className='Nav'>
        <div className='brandHeader'>
          <span className='appName'>Lovelace</span><img src={adaLovelaceLogo} alt='logo' className='logo' /><span className='appName'>Technology</span>
          </div>
      </div>
    )
  }
}

export default Nav
