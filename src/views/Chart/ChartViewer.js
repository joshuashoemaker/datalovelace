import React, { Component } from 'react'
import FocusChart from '../../Models/Chart/FocusChart'
import { Doughnut } from 'react-chartjs-2'

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

  render = () => {
    return (
      <div className='ChartViewer'>
        {this.renderChart()}
      </div>
    )
  }
}

export default ChartViewer
