import React, { Component } from 'react'
import FocusChart from '../../Models/Chart/FocusChart'
import { Doughnut, Bar, Line, Pie, Polar, Radar, Scatter, Bubble } from 'react-chartjs-2'
import { Button } from 'semantic-ui-react'
import download from 'downloadjs'

class ChartViewer extends Component {
  constructor () {
    super ()
    this.focusChart = new FocusChart()
    this.chart = React.createRef()
    this.state = {
      chart: null,
      reportValue: ''
    }

    document.addEventListener('setSelectedChart', this.setFocusChart)
  }

  handleGroupByChange = (e, value) => {
    this.setState({ reportValue: value.value })
  }

  saveChart = () => {
    const base64OfChart = this.chart.current.chartInstance.toBase64Image()
    download(base64OfChart, this.focusChart.chart.label, 'image/png')
  }

  setFocusChart = () => {
    const focusChart = this.focusChart.chart
    if (focusChart) {
      this.setState({
        chart: focusChart
      })
    }
  }

  renderChart = () => {
    const { chart } = this.state
    if (!chart) return

    if (chart.type === 'bar')  return <Bar data={chart[chart.type]} width={600} height={600} ref={this.chart} />
    if (chart.type === 'doughnut')  return <Doughnut data={chart[chart.type]} width={600} height={600} ref={this.chart} />
    if (chart.type === 'line')  return <Line data={chart[chart.type]} width={600} height={600} ref={this.chart} />
    if (chart.type === 'pie')  return <Pie data={chart[chart.type]} width={600} height={600} ref={this.chart} />
    if (chart.type === 'polar')  return <Polar data={chart[chart.type]} width={600} height={600} ref={this.chart} />
    if (chart.type === 'radar')  return <Radar data={chart[chart.type]} width={600} height={600} ref={this.chart} />
    if (chart.type === 'scatter')  return <Scatter data={chart[chart.type]} width={600} height={600} ref={this.chart} />
    if (chart.type === 'bubble')  return <Bubble data={chart[chart.type]} width={600} height={600} ref={this.chart} />
  }

  render = () => {
    return (
      <div className='ChartViewer'>
        {this.renderChart()}
        <br />
        { this.state.chart ? <Button fluid onClick={this.saveChart}>Save As Image</Button> : '' }
      </div>
    )
  }
}

export default ChartViewer
