import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'
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

  clearTablesSelected = () => {
    this.setState({ selectedTablesLabels: [] })
  }

  getSelectedTableLabels = () => this.state.selectedTablesLabels

  toggleSelect = (event, element) => {
    this.setState({ selectedTablesLabels: element.value })
    this.props.onChange(element.value)
  }

  updateTableList = () => {
    this.setState({tables: this.tables.getCollectionProps()})
  }

  renderTableDropdownOptions = () => {
    const { tables } = this.state
    const options = tables.map(t => {
      return {key: t.label, value: t.label, text: t.label}
    })
    return options
  }

  render = () => {
    return (
      <div className='TableSelect'>
        <Dropdown
          clearable
          placeholder='Included Tables'
          header='Included Tables'
          fluid
          multiple
          search
          selection
          options={this.renderTableDropdownOptions()}
          onChange={this.toggleSelect}
        />
      </div>
    )
  }
}

export default TableSelect
