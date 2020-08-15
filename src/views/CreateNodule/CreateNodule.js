import React, { Component } from 'react'
import { Button, Input, Header, Dropdown } from 'semantic-ui-react'
import CreateFilterNoduleForm from './CreateFilterNoduleForm'
import './CreateNodule.css'

import Tables from '../../Models/Tables'
import CreateNoduleController from '../../Controllers/CreateNoduleController'
import CreateJoinNoduleForm from './CreateJoinNoduleForm'
import CreateTransformNoduleForm from './CreateTransformNoduleForm'
import TableSelect from './TableSelect'

class CreateNodule extends Component {
  constructor () {
    super()

    this.state = {
      noduleType: '',
      tablesToImportByLabel: [],
      selectedTablesLabels: []
    }

    this.tables = new Tables()
    this.controller = new CreateNoduleController()

    this.filterNoduleForm = React.createRef()
    this.joinNoduleForm = React.createRef()
    this.transformNoduleForm = React.createRef()
    this.tableSelect = React.createRef()
    this.noduleLabelInput = React.createRef()

    document.addEventListener('updateTables', this.updateTableList)
  }

  clearInput = () => {
    this.setState({ noduleType: '' })
    this.noduleLabelInput.current.inputRef.current.value = ''
    this.tableSelect.current.clearTablesSelected()
  }

  handleNoduleTypeChange = (e, value) => {
    this.setState({ noduleType: value.value })
  }

  handleSelectedTablesChange = labels => {
    this.setState({ selectedTablesLabels: labels })
  }

  handleSubmit = () => {
    const { noduleType } = this.state

    const noduleLabel = this.noduleLabelInput.current.inputRef.current.value
    const selectedTableLabels = this.tableSelect.current.getSelectedTableLabels()

    if (noduleType === 'filter') {
      const filterProperties = this.filterNoduleForm.current.getFilterProperties()
      this.controller.addNewFilterNodule({
        label: noduleLabel,
        tablesToImportByLabel: selectedTableLabels,
        filterType: filterProperties.filterType,
        filterParams: filterProperties.filterParams
      })
    }
    else if (noduleType === 'join') {
      const joinProperties = this.joinNoduleForm.current.getJoinProperties()
      this.controller.addNewJoinNodule({
        label: noduleLabel,
        tablesToImportByLabel: selectedTableLabels,
        joinBy: joinProperties
      })
    }
    else if (noduleType === 'transform') {
      const structureProperties = this.transformNoduleForm.current.getStructureProperties()
      this.controller.addNewTransformNodule({
        label: noduleLabel,
        tablesToImportByLabel: selectedTableLabels,
        structure: structureProperties
      })
    }

    this.clearInput()
  }

  updateTableList = () => {
    this.setState({tables: this.tables.getCollectionProps()})
  }

  renderNoduleForm = () => {
    const { noduleType, selectedTablesLabels } = this.state
    console.log(selectedTablesLabels)

    if (noduleType === 'filter') return <CreateFilterNoduleForm ref={this.filterNoduleForm} tables={selectedTablesLabels} />
    else if (noduleType === 'join') return <CreateJoinNoduleForm ref={this.joinNoduleForm} tables={selectedTablesLabels} />
    else if (noduleType === 'transform') return <CreateTransformNoduleForm ref={this.transformNoduleForm} tables={selectedTablesLabels} />
    else return ''
  }

  render = () => {
    return (
      <div className='CreateNodule'>
        <Header as='h3'>Create Nodule</Header>

        <Input
          placeholder='Nodule Label'
          ref={this.noduleLabelInput}
          icon='tags'
          fluid
        />

        <TableSelect ref={this.tableSelect} onChange={this.handleSelectedTablesChange} />

        <Dropdown
          value ={this.state.noduleType}
          placeholder='Select a Nodule Type'
          options={[
            {key: 'Join Nodule', text: 'Join Nodule', value: 'join', icon: 'sitemap'},
            {key: 'Filter Nodule', text: 'Filter Nodule', value: 'filter', icon: 'filter'},
            {key: 'Transform Nodule', text: 'Transform Nodule', value: 'transform', icon: 'sliders horizontal'},
          ]}
          fluid
          selection
          onChange={this.handleNoduleTypeChange}
        />

        { this.renderNoduleForm() }

        <div className='creatTableFormSubmitButtons'>
          <Button content='Cancel' secondary onClick={this.clearInput} />
          <Button content='Confirm' primary onClick={this.handleSubmit} />
        </div>
      </div>
    )
  }
}

export default CreateNodule
