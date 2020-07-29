import React, { Component } from 'react'
import './App.css'
import 'semantic-ui-css/semantic.min.css'
import CreateTableForm from './CreateTable/CreateTableForm'
import TableList from './TableList/TableList'
import CreateNodule from './CreateNodule/CreateNodule'
import NoduleList from './NoduleList/NoduleList'
import DataTable from './DataTable/DataTable'

class App extends Component {
  render = () => {
    return (
      <div className='App'>
        <CreateTableForm />
        <CreateNodule />
        <TableList />
        <NoduleList />
        <DataTable />
      </div>
    )
  }
}

export default App
