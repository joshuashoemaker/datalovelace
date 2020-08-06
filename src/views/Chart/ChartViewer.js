import React, { Component } from 'react'
import ChartJsChart from '../../Models/Chart/ChartjsChart'
import FocusTable from '../../Models/FocusTable'
import { Doughnut } from 'react-chartjs-2'
import { Dropdown } from 'semantic-ui-react'

class ChartViewer extends Component {
  constructor () {
    super ()
    this.focusTable = new FocusTable()
    this.state = {
      table: null,
      groupByValue: ''
    }

    document.addEventListener('setSelectedTable', this.setFocusTable)
  }

  handleGroupByChange = (e, value) => {
    this.setState({ groupByValue: value.value })
  }

  setFocusTable = () => {
    const focusTable = this.focusTable.table
    if (focusTable) {
      this.setState({
        table: focusTable,
        headers: this.renderGroupByOptions()
      })
    }
  }

  renderChart = () => {
    if (!this.state.table) return
    const chart = new ChartJsChart({
      label: 'test chart',
      type: 'bar',
      table: this.state.table,
      groupByValue: this.state.groupByValue
    })

    console.log(chart.props)

    return <Doughnut data={chart.props} width={600} height={600} />
  }

  renderGroupByOptions = () => {
    const focusTable  = this.focusTable.table
    if (!focusTable) return []

    const headers = focusTable.headers
    const options = headers.map(h => {
      return {key: h, text: h, value: h}
    })
    return options
  }

  render = () => {
    return (
      <div className='ChartViewer'>
        <Dropdown
          placeholder='Select a Comparison Type'
          fluid
          selection
          options={this.state.headers}
          onChange={this.handleGroupByChange}
        />
        {this.renderChart()}
      </div>
    )
  }
}

export default ChartViewer
