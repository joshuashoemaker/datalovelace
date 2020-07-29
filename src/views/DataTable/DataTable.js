import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'

import Tables from '../../Models/Tables'

class DataTable extends Component {
  constructor (props) {
    super(props)
    this.tables = new Tables()
    this.state = {
      headers: [],
      tableData: []
    }
    
    document.addEventListener('setSelectedTable', this.setSelectedTable)
  }

  setSelectedTable = () => {
    const selectedTable = this.tables.selectedTable
    if (selectedTable) {
      this.setState({
        headers: selectedTable.headers,
        tableData: selectedTable.rows
      })
    }
  }

  renderCellElements = data => {
    const { headers } = this.state
    const rowElements = headers.map(h => <Table.Cell singleLine>{data[h]}</Table.Cell>)
    return rowElements
  }

  renderTableHeaderElements = () => {
    const headers = this.state.headers
    const headerElements = headers.map(h => <Table.HeaderCell>{h}</Table.HeaderCell>)
    return headerElements
  }


  renderTableRowElements = () => {
    const { tableData, headers } = this.state
    const tableRowElements = tableData.map(d => {
      return <Table.Row>{ this.renderCellElements(d) }</Table.Row>
    })

    return tableRowElements
  }

  render = () => {
    return (
      <div className='DataTable'>
        <Table celled>
          <Table.Header>
            <Table.Row>
              { this.renderTableHeaderElements() }
            </Table.Row>
          </Table.Header>
          <Table.Body>
          { this.renderTableRowElements() }
          </Table.Body>
        </Table>
      </div>
    )
  }
}

export default DataTable
