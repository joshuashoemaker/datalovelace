import React, { Component } from 'react'
import FocusChart from '../../Models/Chart/FocusChart'
import { Doughnut, Bar, Line, Pie, Polar, Radar, Scatter, Bubble } from 'react-chartjs-2'
import { Button } from 'semantic-ui-react'
import download from 'downloadjs'
import './ChartViewer.css'

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

  closeChart = () => {
    this.focusChart.chart = null
    this.setFocusChart()
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
    this.setState({
      chart: focusChart
    })
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
    const chart = this.state.chart || {}
    return (
      <div className='ChartViewer'>
        <h3 className='chartLabel'>{ chart.label }</h3>
        {this.renderChart()}
        <br />
        { this.state.chart ? <Button className='saveChartAsImageButton' fluid  primary onClick={this.saveChart}>Save As Image</Button> : '' }
        { this.state.chart ? <Button className='closeChartButton' fluid onClick={this.closeChart}>Close Chart</Button> : '' }
      </div>
    )
  }
}

export default ChartViewer
