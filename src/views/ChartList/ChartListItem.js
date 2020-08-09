import React, { Component } from 'react'
import { Card, Icon } from 'semantic-ui-react'

import ChartListController from '../../Controllers/ChartListController'

class ChartListItem extends Component {
  constructor () {
    super()
    this.controller = new ChartListController()
  }

  render = () => {
    const { chart } = this.props
    return (
      <Card key={chart.id} id={chart.id} style={{ width: '380px' }}>
        <Card.Content>
          <Card.Header>{ chart.label }</Card.Header>
          {/* <Card.Meta>{`${chart.table} grouped by ${chart.reportValue}`}</Card.Meta> */}
        </Card.Content>
        <Card.Content extra>
          <span 
          onClick={() => { this.controller.deleteChart(chart.id) }}
          style={{ cursor: 'pointer' }}>
            Delete <Icon name='trash' />
          </span>
          <span 
          onClick={() => { this.controller.selectChartToView(chart.id) }}
          style={{ cursor: 'pointer' }}>
            View <Icon name='table' />
          </span>
        </Card.Content>
      </Card>
    )
  }
}

export default ChartListItem
