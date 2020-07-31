import React, { Component } from 'react'
import CreateTableForm from './CreateTableForm'
import './CreateTableForm.css'

class CreateTablePopOver extends Component {
  render = () => {
    return (
      <div className='CreateTablePopOver'>
        <CreateTableForm />
      </div>
    )
  }
}

export default CreateTablePopOver
