import React, { Component } from 'react'
import ChartJsDataset from '../../Models/Chart/ChartjsDataset'
import FocusChart from '../../Models/Chart/FocusChart'
import { Doughnut } from 'react-chartjs-2'
import { Dropdown } from 'semantic-ui-react'

class ChartViewer extends Component {
  constructor () {
    super ()
    this.focusChart = new FocusChart()
    this.state = {
      chart: null,
      groupByValue: ''
    }

    document.addEventListener('setSelectedChart', this.setFocusChart)
  }

  handleGroupByChange = (e, value) => {
    this.setState({ groupByValue: value.value })
  }

  setFocusChart = () => {
    const focusChart = this.focusChart.chart
    if (focusChart) {
      this.setState({
        chart: focusChart,
        // headers: this.renderGroupByOptions()
      })
    }
  }

  renderChart = () => {
    const { chart } = this.state
    if (!chart) return
    // console.log(chart)

    return <Doughnut data={chart[chart.type]} width={600} height={600} />
  }

  // renderGroupByOptions = () => {
  //   const focusTable  = this.focusTable.table
  //   if (!focusTable) return []

  //   const headers = focusTable.headers
  //   const options = headers.map(h => {
  //     return {key: h, text: h, value: h}
  //   })
  //   return options
  // }

  render = () => {
    return (
      <div className='ChartViewer'>
        {/* <Dropdown
          placeholder='Select Value to Report'
          fluid
          selection
          options={this.state.headers}
          onChange={this.handleGroupByChange}
        /> */}
        {this.renderChart()}
      </div>
    )
  }
}

export default ChartViewer
