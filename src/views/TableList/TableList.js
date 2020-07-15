import React, { Component } from 'react'
import { Card, Icon, CardContent } from 'semantic-ui-react'
import './TableList.css'

import Tables from '../../Collections/Tables'
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
    const tableListElements = tables.map(t => 
      <Card key={t.id} id={t.id}>
        <Card.Content>
          <Card.Header>{ t.label }</Card.Header>
          <Card.Meta>{`${t.rows.length} rows`}</Card.Meta>
        </Card.Content>
        <CardContent
          extra
          onClick={() => { this.controller.deleteTable(t.id) }}
          style={{ cursor: 'pointer' }} 
        >
          Delete <Icon name='trash' />
        </CardContent>
      </Card>
    )
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
