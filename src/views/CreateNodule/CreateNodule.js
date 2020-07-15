import React, { Component } from 'react'
import { Button, Input, Header, Dropdown, Table } from 'semantic-ui-react'
import CreateFilterNoduleForm from './CreateFilterNoduleForm'
import './CreateNodule.css'

import Tables from '../../Collections/Tables'
import CreateNoduleController from '../../Controllers/CreateNoduleController'
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

    document.addEventListener('updateTables', this.updateTableList)
  }

  handleChange = (e, value) => {
    this.setState({ noduleType: value.value })
  }

  handleSubmit = () => {
    if (this.state.noduleType === 'filter')
      console.log(this.filterNoduleForm.current.getFilterProperties())
  }

  updateTableList = () => {
    this.setState({tables: this.tables.getCollectionProps()})
  }

  renderNoduleForm = () => {
    if (this.state.noduleType === 'filter') return <CreateFilterNoduleForm ref={this.filterNoduleForm} />
    else return ''
  }

  render = () => {
    return (
      <div className='CreateNodule'>
        <Header as='h3'>Create Nodule</Header>

        <Input
            placeholder='Nodule Label'
            ref={this.tableLabelInput}
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

        <TableSelect />

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
