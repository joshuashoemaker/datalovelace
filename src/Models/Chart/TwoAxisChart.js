import Chart from './Chart'

class TwoAxisChart extends Chart {
  constructor (props) {
    super(props)
    this.rows = props.table.export()
  }

  get scatter () {
    const data = this.rows.map(r => {
      return { x: r[this.xAxis], y: r[this.yAxis] }
    })

    const pointColor = { r: this._generateRandomRGBNumber(), g: this._generateRandomRGBNumber(), b: this._generateRandomRGBNumber(), a: 0.2 }

    return  {
      labels: [this.label],
      datasets: [
        {
          data: data,
          label: this.label,
          pointBorderColor: `rgba(${pointColor.r}, ${pointColor.g}, ${pointColor.b}, 0.2)`,
          pointBackgroundColor: `rgba(${pointColor.r}, ${pointColor.g}, ${pointColor.b}, 1)`,
          backgroundColor: `rgba(${pointColor.r}, ${pointColor.g}, ${pointColor.b}, 1)`,
        }
      ]
    }
  }

  _generateRandomRGBNumber () {
    const max = 255
    const min = 0
    return Math.round(Math.random() * (max - min) - min)
  }
}

export default TwoAxisChart
