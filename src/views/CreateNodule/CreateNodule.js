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
      tablesToImportByLabel: []
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

  handleChange = (e, value) => {
    this.setState({ noduleType: value.value })
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
  }

  updateTableList = () => {
    this.setState({tables: this.tables.getCollectionProps()})
  }

  renderNoduleForm = () => {
    const { noduleType, tablesToImportByLabel } = this.state

    if (noduleType === 'filter') return <CreateFilterNoduleForm ref={this.filterNoduleForm} />
    else if (noduleType === 'join') return <CreateJoinNoduleForm ref={this.joinNoduleForm} tables={tablesToImportByLabel || []}/>
    else if (noduleType === 'transform') return <CreateTransformNoduleForm ref={this.transformNoduleForm} tables={tablesToImportByLabel || []}/>
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
            style={{ width: '300px' }}
          />
          <br />

        <Dropdown
          placeholder='Select a Nodule Type'
          options={[
            {key: 'Join Nodule', text: 'Join Nodule', value: 'join', icon: 'sitemap'},
            {key: 'Filter Nodule', text: 'Filter Nodule', value: 'filter', icon: 'filter'},
            {key: 'Transform Nodule', text: 'Transform Nodule', value: 'transform', icon: 'sliders horizontal'},
          ]}
          fluid
          selection
          style={{ width: '300px' }}
          onChange={this.handleChange}
        />

        <TableSelect ref={this.tableSelect} />

        { this.renderNoduleForm() }

        <div className='creatTableFormSubmitButtons'>
          <Button content='Cancel' secondary />
          <Button content='Confirm' primary onClick={this.handleSubmit} />
        </div>
      </div>
    )
  }
}

export default CreateNodule
