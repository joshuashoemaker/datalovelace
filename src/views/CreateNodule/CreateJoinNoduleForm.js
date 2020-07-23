import React, { Component } from 'react'
import { Input, Dropdown, Button, Icon, List } from 'semantic-ui-react'
import './CreateNodule.css'

import Tables from '../../Models/Tables'

class CreateJoinNoduleForm extends Component {
  constructor () {
    super()
    this.tables = new Tables()

    this.state = {
      baseTableLabel: '',
      joinParams: [],
      tables: this.tables.getCollectionProps()
    }

    this.foreignTableInput = React.createRef()
    this.primaryTableKeyInput = React.createRef()
    this.matchingKeyInput = React.createRef()
    document.addEventListener('updateTables', this.updateTableList)
  }

  addJoinParam = () => {
    let joinParams = this.state.joinParams || []

    const foreignTable = this.foreignTableInput.current.inputRef.current.value
    const primaryTableKey = this.primaryTableKeyInput.current.inputRef.current.value
    const matchingKey = this.matchingKeyInput.current.inputRef.current.value

    if (foreignTable && matchingKey && primaryTableKey)
      joinParams.push({ foreignTable, primaryTableKey, matchingKey })

    this.setState({ joinParams: joinParams })
  }

  handleChange = (e, value) => {
    this.setState({ baseTableLabel: value.value })
  }

  getBaseTableDropDownOptions = () => {
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
    const { joinParams, bastTableLabel } = this.state

    const joinParamsElements = joinParams.map(p => {
      return <List.Item>{`${bastTableLabel}::${p.primaryTableKey} = ${p.foreignTable}::${p.matchingKey}`}</List.Item>
    })
    return joinParamsElements
  }

  render = () => {
    return (
      <div className='CreateFiltrerNoduleForm'>
        <Dropdown
          placeholder='Select a Base Table'
          fluid
          selection
          options={this.getBaseTableDropDownOptions()}
          onChange={this.handleChange}
        />

        <List celled>
          { this.renderJoinParams() }
        </List>

        <Input label='Primary Table Key' placeholder='Key' ref={this.primaryTableKeyInput} style={{ width: '160px' }} />
        <Input label='Foreign Table Key' placeholder='Key' ref={this.foreignTableInput} style={{ width: '163px' }} />
        <Input label='Matching Key' placeholder='Key' ref={this.matchingKeyInput} style={{ width: '296px' }} />
        <br />

        <Button animated='vertical' onClick={this.addJoinParam} >
          <Button.Content hidden><Icon name='add' /></Button.Content>
          <Button.Content visible>Add</Button.Content>
        </Button>
      </div>
    )
  }
}

export default CreateJoinNoduleForm

