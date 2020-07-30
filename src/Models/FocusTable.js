let instance = null

class FocusTable {
  constructor (table) {
    if (instance === null) instance = this
    this._value = table
    return instance
  }

  set table (table) {
    if (table.type === 'Nodule' || table.type === 'Table') this._value = table
    else {
      this._value = null
      console.error('Focus Tablw value must be of type "Nodule" or "Table"')
    }
  }

  get table () {
    if (this._value.type === 'Table') return this._value
    else if (this._value.type === 'Nodule') return this._value.asTable()
    else return {}
    
  }
}

export default FocusTable
