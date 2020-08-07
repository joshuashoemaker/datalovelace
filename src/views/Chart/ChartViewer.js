import React, { Component } from 'react'
import FocusChart from '../../Models/Chart/FocusChart'
import { Doughnut } from 'react-chartjs-2'
import { Button } from 'semantic-ui-react'
import download from 'downloadjs'

class ChartViewer extends Component {
  constructor () {
    super ()
    this.focusChart = new FocusChart()
    this.chart = React.createRef()
    this.state = {
      chart: null,
      groupByValue: ''
    }

    document.addEventListener('setSelectedChart', this.setFocusChart)
  }

  handleGroupByChange = (e, value) => {
    this.setState({ groupByValue: value.value })
  }

  saveChart = () => {
    console.log(this.chart.current)
    const base64OfChart = this.chart.current.chartInstance.toBase64Image()
    download(base64OfChart, this.focusChart.chart.label, 'image/png')
  }

  setFocusChart = () => {
    const focusChart = this.focusChart.chart
    console.log(focusChart)
    if (focusChart) {
      this.setState({
        chart: focusChart
      })
    }
  }

  renderChart = () => {
    const { chart } = this.state
    if (!chart) return

    return <Doughnut data={chart[chart.type]} width={600} height={600} ref={this.chart} />
  }

  render = () => {
    return (
      <div className='ChartViewer'>
        {this.renderChart()}
        <Button onClick={this.saveChart}>Save As Image</Button>
      </div>
    )
  }
}

export default ChartViewer
