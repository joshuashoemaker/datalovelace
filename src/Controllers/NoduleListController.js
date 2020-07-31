import Nodules from '../Models/Nodules'
import Tables from '../Models/Tables'
import FocusTable from '../Models/FocusTable'

class NoduleistController {
  constructor() {
    this.nodules = new Nodules()
    this.tables = new Tables()
    this.focusTable = new FocusTable()
    this.updatedNodulesEvent = new Event('updateNodules')
    this.updatedTablesEvent = new Event('updateTables')
    this.setSelectedTableEvent = new Event('setSelectedTable')
  }

  convertNoduleToTable = id => {
    const nodule = this.nodules.getNoduleById(id)
    const table = nodule.asTable()
    this.tables.addNewTable(table)
    document.dispatchEvent(this.updatedTablesEvent)
  }

  deleteNodule = id => {
    this.nodules.removeById(id)
    document.dispatchEvent(this.updatedNodulesEvent)
  }

  selectTableToView = id => {    
    const nodule = this.nodules.getNoduleById(id)
    this.focusTable.table = nodule
    document.dispatchEvent(this.setSelectedTableEvent)
  }
}

export default NoduleistController