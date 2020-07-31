import React, { Component } from 'react'
import { Card, Button, Icon } from 'semantic-ui-react'
import CreateTableForm from '../CreateTable/CreateTableForm'
import TableListItem from './TableListItem'
import './TableList.css'

import Tables from '../../Models/Tables'
import TableListController from '../../Controllers/TableListController'

class TableList extends Component {
  constructor () {
    super()

    this.tables = new Tables()
    this.controller = new TableListController()
    this.state = {
      adding: false,
      tables: this.tables.getCollectionProps()
    }

    document.addEventListener('updateTables', this.updateTableList)
  }

  toggleAddingTable = () => { this.setState({ adding: !this.state.adding }) }

  updateTableList = () => {
    this.setState({tables: this.tables.getCollectionProps()})
  }

  renderTableListElements = () => {
    const { tables } = this.state
    const tableListElements = tables.map(t => <TableListItem key={t.id} table={t} /> )
    return tableListElements
  }

  render = () => {
    return (
      <div className='TableList'>
        <Card.Group>
        <Button animated primary style={{ width: '100%', display: 'block' }} onClick={this.toggleAddingTable}>
          <Button.Content visible>Add Table</Button.Content>
          <Button.Content hidden><Icon name='add' /></Button.Content>
        </Button>
        {this.state.adding ? <CreateTableForm /> : ''}
          { this.renderTableListElements() }
        </Card.Group>
      </div>
    )
  }
}

export default TableList
