import Tables from '../Models/Tables'
import FocusTable from '../Models/FocusTable'

class TableListController {
  constructor() {
    this.tables = new Tables()
    this.focusTable = new FocusTable()
    this.updatedTablesEvent = new Event('updateTables')
    this.setSelectedTableEvent = new Event('setSelectedTable')
  }

  deleteTable = id => {
    this.tables.removeById(id)
    document.dispatchEvent(this.updatedTablesEvent)
  }

  selectTableToView = id => {
    const table = this.tables.getById(id)
    this.focusTable.table = table
    document.dispatchEvent(this.setSelectedTableEvent)
  }
}

export default TableListController