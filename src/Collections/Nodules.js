import { FilterNodule, JoinNodule, TransformNodule } from 'dmein'
import { uuid } from 'uuidv4'

let instance = null

class Nodules {
  constructor () {
    if (!instance) instance = this
    this.collection = []
    return instance
  }

  addNewFilterNodule = props => {
    try {
      const newFilterNodule = new FilterNodule({
        id: props.id || uuid(),
        label: props.label,
        tables: props.tables,
        filterParams: props.filterParams,
        filterType: props.filterType
      })
      this.collection.push(newFilterNodule)
    } catch (err) {
      console.error(err)
    }
  }

  addNewJoinNodule = props => {
    try {
      const newJoinNodule = new JoinNodule({
        id: props.id || uuid(),
        label: props.label,
        tables: props.tables,
        joinBy: props.joinBy
      })
      this.collection.push(newJoinNodule)
    } catch (err) {
      console.error(err)
    }
  }

  removeById = id => {
    const indexToRemove = this.collection.findIndex(n => n.id === id)
    if (indexToRemove > -1) this.collection.splice(indexToRemove, 1)
  }

  getCollectionProps = () => this.collection.map(nodule => nodule.getProperties())

  getTableByLabel = label => this.collection.find(n => label === n.label)
}

export default Nodules