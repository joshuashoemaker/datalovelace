import Tables from '../Models/Tables'

class TableListController {
  constructor() {
    this.tables = new Tables()
    this.updatedTablesEvent = new Event('updateTables')
    this.setSelectedTableEvent = new Event('setSelectedTable')
  }

  deleteTable = id => {
    this.tables.removeById(id)
    document.dispatchEvent(this.updatedTablesEvent)
  }

  selectTableToView = id => {
    this.tables.setSelectedTableById(id)
    document.dispatchEvent(this.setSelectedTableEvent)
  }
}

export default TableListController