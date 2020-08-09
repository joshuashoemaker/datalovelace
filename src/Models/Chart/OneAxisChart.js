import Chart from './Chart.js'
import { GroupByNodule } from 'lovelacejs'

class OneAxisChart extends Chart {
  constructor (props) {
    super(props)

    this.groupByNodule = new GroupByNodule({
      id: this.id,
      label: `${this.label} Grouped By ${this.reportValue}`,
      tables: [this.table],
      groupByValue: this.reportValue
    }).export()
    
    this.chartLabels = Object.keys(this.groupByNodule)

    this.groupByCounts = []
    for (let key in this.groupByNodule) {
      this.groupByCounts.push(this.groupByNodule[key].length)
    }
  } 

  get bar () {
    return {
      labels: this.chartLabels,
      datasets: [{
        label: this.label,
        backgroundColor: `rgb(${this._generateRandomRGBNumber()}, ${this._generateRandomRGBNumber()}, ${this._generateRandomRGBNumber()})`,
        data: this.groupByCounts
      }]
    }
  }

  get doughnut () {
    return {
      labels: this.chartLabels,
      datasets: [{
        label: `${this.label} groupedBy ${this.reportValue}`,
        data: this.groupByCounts,
        backgroundColor: this._getbackgroundColors()
      }],
    }
  }

  get line () {
    return {
      labels: this.chartLabels,
      datasets: [{
        label: this.label,
        backgroundColor: `rgb(${this._generateRandomRGBNumber()}, ${this._generateRandomRGBNumber()}, ${this._generateRandomRGBNumber()})`,
        data: this.groupByCounts
      }]
    }
  }

  get pie () {
    return {
      labels: this.chartLabels,
      datasets: [{
        label: `${this.label} groupedBy ${this.reportValue}`,
        data: this.groupByCounts,
        backgroundColor: this._getbackgroundColors()
      }],
    }
  }

  get polar () {
    return {
      labels: this.chartLabels,
      datasets: [{
        label: this.label,
        backgroundColor: this._getbackgroundColors(),
        data: this.groupByCounts
      }]
    }
  }

  get radar () {
    return {
      labels: this.chartLabels,
      datasets: [{
        label: this.label,
        backgroundColor: `rgba(${this._generateRandomRGBNumber()}, ${this._generateRandomRGBNumber()}, ${this._generateRandomRGBNumber()}, 0.2)`,
        data: this.groupByCounts
      }]
    }
  }

  _generateRandomRGBNumber () {
    const max = 255
    const min = 0
    return Math.round(Math.random() * (max - min) - min)
  }

  _getbackgroundColors () {
    const labels = this.labels
    const backgroundColors = labels.map(l => {
      return `rgba(${this._generateRandomRGBNumber()}, ${this._generateRandomRGBNumber()}, ${this._generateRandomRGBNumber()}, 0.4)`
    })
    return backgroundColors
  }
}

export default OneAxisChart
