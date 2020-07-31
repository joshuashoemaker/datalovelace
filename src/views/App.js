import React, { Component } from 'react'
import './App.css'
import 'semantic-ui-css/semantic.min.css'
import DataTable from './DataTable/DataTable'
import ListViewer from './ListViewer/ListViewer'

class App extends Component {
  render = () => {
    return (
      <div className='App'>
        <div className='Workspace'>
          <ListViewer />
          <DataTable />
        </div>
      </div>
    )
  }
}

export default App
