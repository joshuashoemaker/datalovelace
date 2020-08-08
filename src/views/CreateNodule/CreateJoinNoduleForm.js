import React, { Component } from 'react'
import { Dropdown, Button, Icon, List } from 'semantic-ui-react'
import './CreateNodule.css'

import Tables from '../../Models/Tables'

class CreateJoinNoduleForm extends Component {
  constructor () {
    super()
    this.tables = new Tables()

    this.state = {
      baseTableLabel: '',
      foreignTableLabel: '',
      primaryTableKey: '',
      foreignTableKey: '',
      joinParams: [],
      tables: this.tables.getCollectionProps()
    }

    this.foreignTableInput = React.createRef()
    this.primaryTableKeyInput = React.createRef()
    this.matchingKeyInput = React.createRef()
    document.addEventListener('updateTables', this.updateTableList)
  }

  addJoinParam = () => {
    const { joinParams, foreignTableLabel, primaryTableKey, foreignTableKey } = this.state

    const foreignTable = foreignTableLabel
    const matchingKey = foreignTableKey

    console.log(foreignTable, primaryTableKey, matchingKey)

    if (foreignTable && matchingKey && primaryTableKey)
      joinParams.push({ foreignTable, primaryTableKey, matchingKey })

    this.setState({ joinParams: joinParams })
  }

  handleBaseTableChange = (e, value) => {
    this.setState({ baseTableLabel: value.value })
  }

  handleForeignTableChange = (e, value) => {
    this.setState({ foreignTableLabel: value.value })
  }

  handlePrimaryKeyChange = (e, value) => {
    this.setState({ primaryTableKey: value.value })
  }

  handleForeignKeyChange = (e, value) => {
    this.setState({ foreignTableKey: value.value })
  }

  getPrimaryHeadersDropDownOptions = () => {
    const { baseTableLabel } = this.state

    if (!baseTableLabel) return []

    const table = this.tables.getTableByLabel(baseTableLabel)
    const headers = table.headers
    const dropdownOptions = headers.map(h => {
      return { key: h, text: h, value: h }
    })
    return dropdownOptions
  }

  getForeignHeadersDropDownOptions = () => {
    const { foreignTableLabel } = this.state

    if (!foreignTableLabel) return []

    const table = this.tables.getTableByLabel(foreignTableLabel)
    const headers = table.headers
    const dropdownOptions = headers.map(h => {
      return { key: h, text: h, value: h }
    })
    return dropdownOptions
  }

  getTableDropDownOptions = () => {
    const { tables } = this.state
    const options = tables.map(t => {
      return { key: t.label, text: t.label, value: t.label }
    })
    return options
  }

  getJoinProperties = () => {
    const { baseTableLabel, joinParams } = this.state
    return { baseTableLabel, joinParams }
  }

  updateTableList = () => {
    this.setState({tables: this.tables.getCollectionProps()})
  }

  renderJoinParams = () => {
    const { joinParams, baseTableLabel } = this.state

    const joinParamsElements = joinParams.map(p => {
      return <List.Item>{`${baseTableLabel}::${p.primaryTableKey} = ${p.foreignTable}::${p.matchingKey}`}</List.Item>
    })
    return joinParamsElements
  }

  render = () => {
    return (
      <div className='CreateFiltrerNoduleForm'>
        <Dropdown
          clearable
          search
          header='Primary Table'
          placeholder='Select a Primary Table'
          fluid
          selection
          options={this.getTableDropDownOptions()}
          onChange={this.handleBaseTableChange}
        />

        <List celled>
          { this.renderJoinParams() }
        </List>

        <Dropdown
          clearable
          search
          header='Primary Key'
          placeholder='Select a Primary Key'
          fluid
          selection
          options={this.getPrimaryHeadersDropDownOptions()}
          onChange={this.handlePrimaryKeyChange}
        />
        
        <Dropdown
          clearable
          search
          header='Foreign Table'
          placeholder='Select a Foreign Table'
          fluid
          selection
          options={this.getTableDropDownOptions()}
          onChange={this.handleForeignTableChange}
        />

        <Dropdown
          clearable
          search
          header='Foreign Key'
          placeholder='Select a Foreign Key'
          fluid
          selection
          options={this.getForeignHeadersDropDownOptions()}
          onChange={this.handleForeignKeyChange}
        />
        <br />

        <Button animated='vertical' onClick={this.addJoinParam}>
          <Button.Content hidden><Icon name='add' /></Button.Content>
          <Button.Content visible>Add</Button.Content>
        </Button>
      </div>
    )
  }
}

export default CreateJoinNoduleForm

