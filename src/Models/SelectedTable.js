class SelectedTable {
  constructor (table) {
    this.assignTable(table)
  }

  assignTable = table => {
    if (table.type === "Nodule") {
      this.table = table.asTable()
    } else if (table.type === 'Table') {
      this.table = table
    } else {
      this.table = {}
    }
  }

  get headers () {
    const rows = this.table.rows
    const length = rows.length
    let lengthToSlice = 49
    if (length < 50) lengthToSlice = length - 1
    const firstSliceOfRows = rows.slice(0, lengthToSlice)
    const headersOfSplicedRows = firstSliceOfRows.map(r => Object.keys(r))
    const flatenedHeaders = headersOfSplicedRows.flat()
    const uniqueHeaders = Array.from(new Set(flatenedHeaders))
    return uniqueHeaders
  }
}

export default SelectedTable
