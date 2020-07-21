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
    document.dispatchEvent(this.updatedNodulesEvent)
  }

  addNewJoinNodule = props => {
    const { label, tablesToImportByLabel, baseTableLabel, joinParams } = props
    const tables = tablesToImportByLabel.map(label => {
      return this.tables.getTableByLabel(label)
    })

    this.nodules.addNewJoinNodule({
      label,
      tables,
      joinBy: {
        baseTableLabel,
        joinParams
      }
    })
    document.dispatchEvent(this.updatedNodulesEvent)
  }

  deleteNodule = id => {
    this.nodules.removeById(id)
    document.dispatchEvent(this.updatedNodulesEvent)
  }
}

export default CreateNoduleController