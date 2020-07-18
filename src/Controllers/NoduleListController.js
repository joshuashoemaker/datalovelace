import Nodules from '../Collections/Nodules'

class NoduleistController {
  constructor() {
    this.nodules = new Nodules()
    this.updatedNodulesEvent = new Event('updateNodules')
  }

  deleteTable = id => {
    this.nodules.removeById(id)
    document.dispatchEvent(this.updatedNodulesEvent)
  }
}

export default NoduleistController