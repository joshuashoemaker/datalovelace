import React, { Component } from 'react'
import './Button.css'

class Button extends Component {

  getButtonClasses = () => {
    const { style } = this.props
    let additionalClass = ''

    if (style === 'cancel') additionalClass = 'Button-cancel'
    if (style === 'outline') additionalClass = 'Button-outline'

    return `Button ${additionalClass}`
  }

  render = () => {
    return (
      <button className={this.getButtonClasses()} onClick={this.props.onClick}>
        { this.props.value || 'Submit' }
      </button>
    )
  }
}

export default Button
