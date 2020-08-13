import React, { Component } from 'react'
import './Nav.css'
import octocat from '../../img/octocat.svg'
import adaLovelaceLogo from  '../../img/adaLovelace.jpg'

class Nav extends Component {
  render = () => {
    return (
      <div className='Nav'>
        <a className='documentationLink' target='_blank' rel='noopener noreferrer' href='https://docs.lovelace.technology'>Guide</a>
        <div className='brandHeader'>
          <img src={adaLovelaceLogo} alt='logo' className='logo' />
          <span className='appName'>Lovelace</span>
        </div>
        <a className='sponsorLink' target='_blank' rel='noopener noreferrer' href='https://github.com/sponsors/joshuashoemaker'><img src={octocat} alt='sponsor button' /> Sponsor</a>
      </div>
    )
  }
}

export default Nav
