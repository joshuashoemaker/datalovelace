import React, { Component } from 'react'
import './App.css'
import 'semantic-ui-css/semantic.min.css'
import CreateTableForm from './CreateTable/CreateTableForm'

class App extends Component {
  render = () => {
    return (
      <div className='App'>
        <CreateTableForm />
      </div>
    )
  }
}

export default App
