import React, { Component } from 'react'
import './App.css'
import 'semantic-ui-css/semantic.min.css'
import CreateTableForm from './CreateTable/CreateTableForm'
import TableList from './TableList/TableList'
import CreateNodule from './CreateNodule/CreateNodule'

class App extends Component {
  render = () => {
    return (
      <div className='App'>
        <CreateTableForm />
        <CreateNodule />
        <TableList />
      </div>
    )
  }
}

export default App
