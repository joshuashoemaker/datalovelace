import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'
import TableListItem from './TableListItem'
import './TableList.css'

import Tables from '../../Models/Tables'
import TableListController from '../../Controllers/TableListController'

class TableList extends Component {
  constructor () {
    super()

    this.tables = new Tables()
    this.controller = new TableListController()
    this.state = { tables: this.tables.getCollectionProps() }

    document.addEventListener('updateTables', this.updateTableList)
  }

  updateTableList = () => {
    this.setState({tables: this.tables.getCollectionProps()})
  }

  renderTableListElements = () => {
    const { tables } = this.state
    const tableListElements = tables.map(t => <TableListItem table={t} /> )
    return tableListElements
  }

  render = () => {
    return (
      <div className='TableList'>
        <Card.Group>
          { this.renderTableListElements() }
        </Card.Group>
      </div>
    )
  }
}

export default TableList
