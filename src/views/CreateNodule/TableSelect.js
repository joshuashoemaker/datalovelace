import React, { Component } from 'react'
import { Label, Icon } from 'semantic-ui-react'
import './CreateNodule.css'

import Tables from '../../Models/Tables'

class TableSelect extends Component {
  constructor () {
    super()
    this.tables = new Tables()
    this.state = {
      selectedTablesLabels: [],
      tables: this.tables.getCollectionProps()
    }
    document.addEventListener('updateTables', this.updateTableList)
  }

  getSelectedTableLabels = () => this.state.selectedTablesLabels

  toggleSelect = label => {
    const { selectedTablesLabels } = this.state
    let newselectedTablesLabels = selectedTablesLabels
  
    const selectedIndex = selectedTablesLabels.findIndex(selected => selected === label)

    if (selectedIndex === -1) newselectedTablesLabels.push(label)
    else if (selectedIndex === 0 && selectedTablesLabels.length === 1) newselectedTablesLabels = []
    else newselectedTablesLabels.splice(selectedIndex, 1)

    this.setState({ selectedTablesLabels: newselectedTablesLabels })
  }

  updateTableList = () => {
    this.setState({tables: this.tables.getCollectionProps()})
  }

  renderTableLabels = () => {
    const { selectedTablesLabels, tables } = this.state
    const tableLabelElements = tables.map(t => {
      const isSelected = selectedTablesLabels.includes(t.label)
      return (
        <Label onClick={() => this.toggleSelect(t.label)} color={isSelected ? 'blue' : 'grey'} style={{ cursor: 'pointer' }}>
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
