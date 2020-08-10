import { uuid } from 'uuidv4'
import OneAxisChart from '../../Models/Chart/OneAxisChart'
import TwoAxisChart from '../../Models/Chart/TwoAxisChart'
import ThreeAxisChart from '../../Models/Chart/ThreeAxisChart'
import chartTypes from '../../Constants/chartTypes' 

let instance = null

class Charts {
  constructor () {
    if (!instance) instance = this
    this.collection = []
    return instance
  }

  addNewChart = chart => {
    let newChart = null
    if (chartTypes.oneAxisCharts.includes(chart.type)) newChart = this._generateOneAxisChart(chart)
    if (chartTypes.twoAxisCharts.includes(chart.type)) newChart = this._generateTwoAxisChart(chart)
    if (chartTypes.threeAxisCharts.includes(chart.type)) newChart = this._generateThreeAxisChart(chart)

    if (newChart) this.collection.push(newChart)
  }

  getById = id => this.collection.find(t => id === t.id)

  getByLabel = label => this.collection.find(t => label === t.label)

  getCollectionProps = () => {
    const charts = this.collection
    const chartProps = charts.map(c => {
      return {
        id: c.id,
        label: c.label,
        table: c.table.label,
        type: c.type,
        reportValue: c.reportValue
      }
    })
    return chartProps
  }

  removeById = id => {
    const indexToRemove = this.collection.findIndex(t => t.id === id)
    if (indexToRemove > -1) this.collection.splice(indexToRemove, 1)
  }

  _generateOneAxisChart = chart => {
    const newChart = new OneAxisChart({
      id: chart.id || uuid(),
      label: chart.label,
      type: chart.type,
      table: chart.table,
      reportValue: chart.reportValue
    })
    return newChart
  }

  _generateTwoAxisChart = chart => {
    const newChart = new TwoAxisChart({
      id: chart.id || uuid(),
      label: chart.label,
      type: chart.type,
      table: chart.table,
      xAxis: chart.xAxis,
      yAxis: chart.yAxis
      // reportValue: chart.reportValue
    })
    return newChart
  }

  _generateThreeAxisChart = chart => {
    const newChart = new ThreeAxisChart({
      id: chart.id || uuid(),
      label: chart.label,
      type: chart.type,
      table: chart.table,
      xAxis: chart.xAxis,
      yAxis: chart.yAxis,
      reportValue: chart.reportValue
    })
    return newChart
  }
}

export default Charts
