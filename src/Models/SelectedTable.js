class SelectedTable {
  constructor (props) {
    this.table = props.table
  }

  getHeaders = () => {
    const rows = this.table.rows
    const length = rows.length
    let lengthToSlice = 49
    if (length < 50) lengthToSlice = length - 1
    const firstSliceOfRows = rows.slice(0, lengthToSlice)
    console.log(firstSliceOfRows)
    // const uniqueHeaderSet = new Set(firstSliceOfRows)
  }
}