import React, { Component } from 'react'
import { Card, Button, Icon } from 'semantic-ui-react'
import CreateChartForm from '../CreateChart/CreateChartForm'
import ChartListItem from './ChartListItem'
// import './TableList.css'

import Charts from '../../Models/Chart/Charts'
import ChartListController from '../../Controllers/ChartListController'

class ChartList extends Component {
  constructor () {
    super()

    this.charts = new Charts()
    this.controller = new ChartListController()
    this.state = {
      adding: false,
      charts: this.charts.getCollectionProps()
    }

    document.addEventListener('updateCharts', this.updateChartList)
  }

  toggleAddingTable = () => { this.setState({ adding: !this.state.adding }) }

  updateChartList = () => {
    this.setState({charts: this.charts.getCollectionProps()})
  }

  renderListItemElements = () => {
    const { charts } = this.state
    const chartListElements = charts.map(c => <ChartListItem key={c.id} chart={c} /> )
    return chartListElements
  }

  render = () => {
    return (
      <div className='TableList'>
        <Card.Group>
        <Button animated primary style={{ width: '100%', display: 'block' }} onClick={this.toggleAddingTable}>
          <Button.Content visible>Add Chart</Button.Content>
          <Button.Content hidden><Icon name='add' /></Button.Content>
        </Button>
        {this.state.adding ? <CreateChartForm /> : ''}
          { this.renderListItemElements() }
        </Card.Group>
      </div>
    )
  }
}

export default ChartList
