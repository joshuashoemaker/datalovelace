import React, { Component } from 'react'
import { Card, Icon } from 'semantic-ui-react'
import './TableList.css'

import TableListController from '../../Controllers/TableListController'

class TableListItem extends Component {
  constructor () {
    super()
    this.controller = new TableListController()
  }

  render = () => {
    const { table } = this.props
    return (
      <Card key={table.id} id={table.id}>
        <Card.Content>
          <Card.Header>{ table.label }</Card.Header>
          <Card.Meta>{`${table.rows.length} rows`}</Card.Meta>
        </Card.Content>
        <Card.Content
          extra
          onClick={() => { this.controller.deleteTable(table.id) }}
          style={{ cursor: 'pointer' }} 
        >
          Delete <Icon name='trash' />
        </Card.Content>
      </Card>
    )
  }
}

export default TableListItem
