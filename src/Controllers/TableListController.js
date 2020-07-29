import Tables from '../Models/Tables'

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
    console.log(this.tables.getById(id).headers)
  }
}

export default TableListController