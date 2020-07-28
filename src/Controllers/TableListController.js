import Tables from '../Models/Tables'
import SelectedTable from '../Models/SelectedTable'

class TableListController {
  constructor() {
    this.tables = new Tables()
    this.updatedTablesEvent = new Event('updateTables')
  }

  deleteTable = id => {
    this.tables.removeById(id)
    document.dispatchEvent(this.updatedTablesEvent)
  }

  logExportById = id => {
    const selectedTable = new SelectedTable(this.tables.getById(id))
    console.log(selectedTable.headers)
  }
}

export default TableListController