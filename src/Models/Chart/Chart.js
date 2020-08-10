import chartTypes from '../../Constants/chartTypes'

class Chart {
  constructor (props) {
    this.id = props.id
    this.label = props.label
    this.table = props.table
    this.type = props.type
    this.reportValue = props.reportValue
    this.xAxis = props.xAxis
    this.yAxis = props.yAxis
  }

  get id () {
    return this._id
  }

  set id (newId) {
    this._id = newId
    return this._id
  }

  get data () {
    return this.table.rows
  }

  get labels () {
    return this.table.headers
  }

  get table () {
    return this._table
  }

  get type () {
    return this._chartType
  }

  get reportValue () {
    return this._reportValue
  }

  get xAxis () {
    return this._xAxis
  }

  get yAxis () {
    return this._yAxis
  }

  set reportValue (value) {
    this._reportValue = value || this._reportValue
    return this._reportValue
  } 

  set table (table) {
    if (!table) this._table = null
    else if (table.type === 'Table') this._table = table
    else if (table.type === 'Nodule') this._table = table.asTable()
    else this._table = null
  }

  set type (value) {
    const isChartTypeValid = this._validateChartType(value)
    if (isChartTypeValid) this._chartType = value
    else this._chartType = null
  }

  set xAxis (value) {
    this._xAxis = value
    return this._xAxis
  }

  set yAxis (value) {
    this._yAxis = value
    return this._yAxis
  }

  _validateChartType = type => {
    const allChartTypes = Object.values(chartTypes).flat()
    if (allChartTypes.includes(type)) return true
    else return false
  }
}

export default Chart
