import chartTypes from '../../Constants/chartTypes'

class Chart {
  constructor (props) {
    this.id = props.id
    this.label = props.label
    this.table = props.table
    this.type = props.type
    this.groupByValue = props.groupByValue
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

  get groupByValue () {
    return this._groupByValue
  }

  set groupByValue (value) {
    this._groupByValue = value || this._groupByValue
    return this._groupByValue
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

  _validateChartType = type => {
    if (chartTypes.includes(type)) return true
    else return false
  }
}

export default Chart
