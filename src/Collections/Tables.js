import { Table } from 'dmein'
import { uuid } from 'uuidv4'

let instance = null

class Tables {
  constructor () {
    if (!instance) instance = this
    this.collection = []
    return instance
  }

  addNewTable = table => {
    try {
      const newTable = new Table({
        id: table.id || uuid(),
        label: table.label,
        rows: table.rows
      })
      this.collection.push(newTable)
    } catch (err) {
      console.error(err)
    }
  }

  removeTableById = id => {
    const indexToRemove = this.collection.findIndex(t => t.id === id)
    if (this.collection.length === 1 && indexToRemove > -1) {
      this.collection = []
    }
    else {
      const modifiedCollection = this.collection.splice(indexToRemove, 1)
      this.collection = modifiedCollection
    }
  }

  getCollectionProps = () => this.collection.map(table => table.getProperties())

  getTableByLabel = label => this.collection.find(t => label === t.label)
}

export default Tables
