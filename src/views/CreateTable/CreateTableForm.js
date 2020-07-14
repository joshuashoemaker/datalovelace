import React, { Component } from 'react'
import { Button, Input, Header } from 'semantic-ui-react'
import './CreateTableForm.css'

import FileAccess from '../../Services/FileAccess'
const fileAccess = new FileAccess()


class CreateTableForm extends Component {
  constructor () {
    super()
    this.tableLabelInput = React.createRef()
    this.tableFileInput = React.createRef()
  }

  handleSubmit = async e => {
    e.preventDefault()

    fileAccess.setFile(this.tableFileInput.current.inputRef.current.files[0])
    const fileData = await fileAccess.readFile()
    console.log(fileData)
  }

  render = () => {
    return (
      <div className='CreateTableForm'>
        <Header as='h3'>Create Table From File</Header>
        <form onSubmit={this.handleSubmit}>
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
          />

        <div className='creatTableFormSubmitButtons'>
          <Button content='Confirm' primary />
          <Button content='Confirm' secondary />
        </div>
        </form>
      </div>
    )
  }
}

export default CreateTableForm