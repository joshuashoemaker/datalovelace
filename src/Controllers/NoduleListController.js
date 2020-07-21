import Nodules from '../Collections/Nodules'

class NoduleistController {
  constructor() {
    this.nodules = new Nodules()
    this.updatedNodulesEvent = new Event('updateNodules')
  }

  deleteNodule = id => {
    this.nodules.removeById(id)
    document.dispatchEvent(this.updatedNodulesEvent)
  }
}

export default NoduleistController