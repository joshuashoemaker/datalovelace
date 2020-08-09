import chartTypes from '../../Constants/chartTypes'

class Chart {
  constructor (props) {
    this.id = props.id
    this.label = props.label
    this.table = props.table
    this.type = props.type
    this.reportValue = props.reportValue
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

  _validateChartType = type => {
    const allChartTypes = Object.values(chartTypes).flat()
    if (allChartTypes.includes(type)) return true
    else return false
  }
}

export default Chart
