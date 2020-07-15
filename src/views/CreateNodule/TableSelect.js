import React, { Component } from 'react'
import { Label, Icon } from 'semantic-ui-react'
import './CreateNodule.css'

import Tables from '../../Collections/Tables'

class TableSelect extends Component {
  constructor () {
    super()
    this.tables = new Tables()
    this.state = {
      selectedTables: [],
      tables: this.tables.getCollectionProps()
    }
    document.addEventListener('updateTables', this.updateTableList)
  }

  toggleSelect = label => {
    console.log(label)
  }

  updateTableList = () => {
    this.setState({tables: this.tables.getCollectionProps()})
  }

  renderTableLabels = () => {
    const { selectedTables, tables } = this.state
    const tableLabelElements = tables.map(t => {
      const isSelected = label => selectedTables.includes(label)
      return (
        <Label onClick={() => this.toggleSelect(t.label)}>
          {t.label}
          { isSelected ? <Icon name='delete' /> : '' }
        </Label>
      )
    })
    return tableLabelElements
  }

  render = () => {
    return (
      <div className='TableSelect'>
        { this.renderTableLabels() }
      </div>
    )
  }
}

export default TableSelect
