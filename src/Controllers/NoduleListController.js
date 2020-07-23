import Nodules from '../Models/Nodules'

class NoduleistController {
  constructor() {
    this.nodules = new Nodules()
    this.updatedNodulesEvent = new Event('updateNodules')
  }

  deleteNodule = id => {
    this.nodules.removeById(id)
    document.dispatchEvent(this.updatedNodulesEvent)
  }

  logExportById = id => {
    const nodule = this.nodules.getNoduleById(id)
    console.log(nodule.export())
  }
}

export default NoduleistController