let instance = null

class FocusChart {
  constructor (chart) {
    if (instance === null) instance = this
    this._value = chart
    return instance
  }

  set chart (chart) {
    this._value = chart
    return this._value
  }

  get chart () {
    return this._value
  }
}

export default FocusChart
