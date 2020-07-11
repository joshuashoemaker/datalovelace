import React, { Component } from 'react'
import './TextField.css'

class TextField extends Component {
  render = () => {
    const { id, label, onBlur, inlineLabel } = this.props
    return (
    <div className='TextField'>
      { label ? <label htmlFor={id}>{label}</label> : '' }
      {!inlineLabel ? <br /> : ''}
      <input type='text' id={this.props.id} onBlur={onBlur} />
    </div>
    )
  }
}

export default TextField
