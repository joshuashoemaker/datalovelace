import Tables from '../Collections/Tables'
import Nodules from '../Collections/Nodules'

class CreateNoduleController {
  constructor() {
    this.nodules = new Nodules()
    this.tables = new Tables()
    this.updatedNodulesEvent = new Event('updateNodules')
  }

  addNewFilterNodule = (props) => {
    const { label, filterType, filterParams, tablesToImportByLabel } = props
    const tables = tablesToImportByLabel.map(label => {
      return this.tables.getTableByLabel(label)
    })

    this.nodules.addNewFilterNodule({
      label,
      filterType,
      filterParams,
      tables
    })
    console.log(this.nodules)
    document.dispatchEvent(this.updatedNodulesEvent)
  }

  deleteNodule = id => {
    this.nodules.removeTableById(id)
    document.dispatchEvent(this.updatedNodulesEvent)
  }
}

export default CreateNoduleController