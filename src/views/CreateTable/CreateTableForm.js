import React, { Component } from 'react'
import { Button, Input, Header } from 'semantic-ui-react'
import './CreateTableForm.css'

import CreateTableController from '../../Controllers/CreateTableController'

class CreateTableForm extends Component {
  constructor () {
    super()
    this.controller = new CreateTableController()
    this.tableLabelInput = React.createRef()
    this.tableFileInput = React.createRef()
  }

  handleSubmit = async e => {
    e.preventDefault()
    const label = this.tableLabelInput.current.inputRef.current.value
    const file = this.tableFileInput.current.inputRef.current.files[0]

    this.controller.submitLocalFile({ label, file })

    this.tableLabelInput.current.inputRef.current.value = ''
  }

  render = () => {
    return (
      <div className='CreateTableForm'>
        <Header as='h3'>Create Table From File</Header>
        <div>
          <Input
            placeholder='Table Label'
            ref={this.tableLabelInput}
            icon='tags'
            style={{ width: '300px' }}
          />

          <br />

          <Input
            type='file'
            ref={this.tableFileInput}
            icon='file'
            style={{ width: '300px' }}
            accept=".xls,.xlsx,.json"
          />

          <div className='creatTableFormSubmitButtons'>
            <Button content='Cancel' secondary />
            <Button content='Confirm' primary onClick={this.handleSubmit} />
          </div>
        </div>
      </div>
    )
  }
}

export default CreateTableForm