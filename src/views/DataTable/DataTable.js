import React, { Component } from 'react'
import { Table, Button } from 'semantic-ui-react'
import {json2excel} from 'js2excel'
import './DataTable.css'

import Tables from '../../Models/Tables'
import FocusTable from '../../Models/FocusTable'

class DataTable extends Component {
  constructor (props) {
    super(props)
    this.tables = new Tables()
    this.focusTable = new FocusTable()
    this.state = {
      headers: [],
      tableData: []
    }
    
    document.addEventListener('setSelectedTable', this.setFocusTable)
  }

  setFocusTable = () => {
    const focusTable = this.focusTable.table
    if (focusTable) {
      this.setState({
        headers: focusTable.headers,
        tableData: focusTable.rows,
        label: focusTable.label
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
    const { tableData } = this.state
    const tableRowElements = tableData.map(d => <Table.Row>{ this.renderCellElements(d) }</Table.Row> )
    return tableRowElements
  }

  saveTable = () => {
    const { tableData, label } = this.state
    try {
      json2excel({
        data: tableData,
        name: label
      })
      // download(tableFile, this.focusTable.label, 'application/vnd.ms-excel')
    } catch (err) {
      console.log(err)
      window.alert('Issue downloading Table.')
    }
  }

  render = () => {
    const { tableData, label } = this.state
    return (
      <div className='DataTable'>
        { tableData.length ? <Button className='saveTableAsExcel' fluid  onClick={this.saveTable}>Download { label } Table</Button> : '' }
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
