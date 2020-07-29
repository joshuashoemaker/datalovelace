import { Table } from 'dmein'
import { uuid } from 'uuidv4'

let instance = null

class Tables {
  constructor () {
    if (!instance) instance = this
    this.collection = []
    this.selectedTable = null
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

  getById = id => this.collection.find(t => id === t.id)

  setSelectedTableById = id => {
    const table = this.collection.find(t => id === t.id)
    if (table) this.selectedTable = table
    else this.selectedTable = null
  }
}

export default Tables
