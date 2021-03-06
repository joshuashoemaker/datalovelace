import React, { Component } from 'react'
import TableList from '../TableList/TableList'
import NoduleList from '../NoduleList/NoduleList'
import './ListViewer.css'
import { Tab } from 'semantic-ui-react'
import ChartList from '../ChartList/ChartList'

class ListViewer extends Component {
  constructor () {
    super()
    this.panes = [
      { menuItem: 'Tables', render: () => <Tab.Pane><TableList /></Tab.Pane> },
      { menuItem: 'Nodules', render: () => <Tab.Pane><NoduleList /></Tab.Pane> },
      { menuItem: 'Charts', render: () => <Tab.Pane><ChartList /></Tab.Pane> }
    ]
  }
  render = () => {
    return (
      <div className='ListViewer'>
        <Tab panes={this.panes} />
      </div>
    )
  }
}

export default ListViewer
