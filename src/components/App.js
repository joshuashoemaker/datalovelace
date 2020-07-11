import React, { Component } from 'react'
import './App.css'
import Button from './Inputs/Button'
import TextField from './Inputs/TextField'

class App extends Component {
  render = () => {
    return (
      <div>
        <Button />
        <TextField id='QWERTY' label='TestLabel' onBlur={() => console.log('Yo')} />
      </div>
    )
  }
}

export default App
