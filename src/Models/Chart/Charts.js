import { uuid } from 'uuidv4'
import ChartJsDataset from '../../Models/Chart/ChartjsDataset'
import chartjsTypes from '../../Constants/chartjsTypes' 

let instance = null

class Charts {
  constructor () {
    if (!instance) instance = this
    this.collection = []
    return instance
  }

  addNewChart = chart => {
    let newChart = null
    if (chartjsTypes.includes(chart.type)) newChart = this._generateChartJsDataset(chart)

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
        groupByValue: c.groupByValue
      }
    })
    return chartProps
  }

  removeById = id => {
    const indexToRemove = this.collection.findIndex(t => t.id === id)
    if (indexToRemove > -1) this.collection.splice(indexToRemove, 1)
  }

  _generateChartJsDataset = chart => {
    const newChart = new ChartJsDataset({
      id: chart.id || uuid(),
      label: chart.label,
      type: chart.type,
      table: chart.table,
      groupByValue: chart.groupByValue
    })
    return newChart
  }
}

export default Charts
