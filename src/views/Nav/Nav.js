import React, { Component } from 'react'
import './Nav.css'
import sponsorIcon from '../../img/sponsor.svg'
import guideIcon from '../../img/faq.svg'
import adaLovelaceLogo from  '../../img/adaLovelace.jpg'

class Nav extends Component {
  render = () => {
    return (
      <div className='Nav'>
        <a className='documentationLink' target='_blank' rel='noopener noreferrer' href='https://docs.datalovelace.app'><img src={guideIcon} alt='guide button' />Guide</a>
        <div className='brandHeader'>
          <img src={adaLovelaceLogo} alt='logo' className='logo' />
          <span className='appName'>Lovelace</span>
        </div>
        <a className='sponsorLink' target='_blank' rel='noopener noreferrer' href='https://github.com/sponsors/joshuashoemaker'><img src={sponsorIcon} alt='sponsor button' /> Sponsor</a>
      </div>
    )
  }
}

export default Nav
