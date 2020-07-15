import Tables from '../Collections/Tables'

class TableListController {
  constructor() {
    this.tables = new Tables()
    this.updatedTablesEvent = new Event('updateTables')
  }

  deleteTable = id => {
    this.tables.removeTableById(id)
    document.dispatchEvent(this.updatedTablesEvent)
  }
}

export default TableListController