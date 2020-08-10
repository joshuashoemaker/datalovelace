import Chart from './Chart.js'
import { GroupByNodule } from 'lovelacejs'

class ThreeAxisChart extends Chart {
  constructor (props) {
    super(props)

    this.chartSize = 600
    this.rows = props.table.export()
    this.scale = props.scale || 3.5
    

    const reportValues = this.rows.map(r => {
      return r[this.reportValue]
    })
    this.largestValue = Math.max(...reportValues)
  }

  get bubble () {
    const data = this.rows.map(r => {
      return { x: r[this.xAxis], y: r[this.yAxis], r: this.calculateReportValueScale(r[this.reportValue]) }
    })

    const pointColor = { r: this._generateRandomRGBNumber(), g: this._generateRandomRGBNumber(), b: this._generateRandomRGBNumber(), a: 0.2 }

    return {
      labels: [this.xAxis, this.yAxis],
      datasets: [
        {
          label: this.reportValue,
          data: data,
          borderColor: `rgba(255, 255, 255, 0.3)`,
          backgroundColor: `rgba(${pointColor.r}, ${pointColor.g}, ${pointColor.b}, 0.6)`
        }
      ]
    }
  }

  calculateReportValueScale = (reportValue) => {
    const scale = 3.5
    const size = (reportValue / this.largestValue) * 100
    return Math.round(size / scale)
  }

  _generateRandomRGBNumber () {
    const max = 255
    const min = 0
    return Math.round(Math.random() * (max - min) - min)
  }
}

export default ThreeAxisChart
