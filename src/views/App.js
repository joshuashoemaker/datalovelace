import React, { Component } from 'react'
import './App.css'
import 'semantic-ui-css/semantic.min.css'

import DataTable from './DataTable/DataTable'
import ListViewer from './ListViewer/ListViewer'
import Nav from './Nav/Nav'
import ChartViewer from './ChartViewer/ChartViewer'

class App extends Component {
  render = () => {
    return (
      <div className='App'>
        <Nav />
        <div className='Workspace'>
          <ListViewer />
          <DataTable />
          <ChartViewer />
        </div>
      </div>
    )
  }
}

export default App
