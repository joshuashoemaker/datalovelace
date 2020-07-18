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

  removeById = id => {
    const indexToRemove = this.collection.findIndex(t => t.id === id)
    if (indexToRemove > -1) this.collection.splice(indexToRemove, 1)
  }

  getCollectionProps = () => this.collection.map(table => table.getProperties())

  getTableByLabel = label => this.collection.find(t => label === t.label)
}

export default Tables
