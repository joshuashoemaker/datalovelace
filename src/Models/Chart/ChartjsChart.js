import Chart from './Chart.js'
import { GroupByNodule } from 'lovelacejs'

class ChartJsChart extends Chart {
  constructor (props) {
    super(props)
  }

  get props () {

    const groupByNodule = new GroupByNodule({
      id: this.table.id,
      label: `${this.table.label} groupedBy something`,
      tables: [this.table],
      groupByValue: this.groupByValue
    }).export()

    const labels = Object.keys(groupByNodule)

    let groupByCounts = []
    for (let key in groupByNodule) {
      groupByCounts.push(groupByNodule[key].length)
    }
    
    return {
      labels: labels,
      datasets: [{
        label: this.label,
        data: groupByCounts,
        backgroundColor: this._getbackgroundColors()
      }],
    }

    // return [{
    //   label: this.label,
    //   data: groupByCounts,
    //   backgroundColor: this._getbackgroundColors()
    // }]
  }

  _generateRandomRGBNumber () {
    const max = 255
    const min = 0
    return Math.round(Math.random() * (max - min) - min)
  }

  _getbackgroundColors () {
    const labels = this.labels
    const backgroundColors = labels.map(l => {
      return `rgb(${this._generateRandomRGBNumber()}, ${this._generateRandomRGBNumber()}, ${this._generateRandomRGBNumber()})`
    })
    return backgroundColors
  }
}

export default ChartJsChart
