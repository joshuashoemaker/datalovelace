import React, { Component } from 'react'
import { Input, Dropdown, Grid } from 'semantic-ui-react'
import './CreateNodule.css'

class CreateFilterNoduleForm extends Component {
  constructor () {
    super()
    this.state = { filterType: '' }

    this.keyInput1 = React.createRef()
    this.keyInput2 = React.createRef()
    this.keyInput3 = React.createRef()
    this.valueInput1 = React.createRef()
    this.valueInput2 = React.createRef()
    this.valueInput3 = React.createRef()
    document.addEventListener('updateTables', this.updateTableList)
  }

  handleChange = (e, value) => {
    this.setState({ filterType: value.value })
  }

  getFilterProperties = () => {
    let filterParams = {}

    if (this.keyInput1.current.inputRef.current.value)
      filterParams[this.keyInput1.current.inputRef.current.value] = this.valueInput1.current.inputRef.current.value
    
    if (this.keyInput2.current.inputRef.current.value)
      filterParams[this.keyInput2.current.inputRef.current.value] = this.valueInput2.current.inputRef.current.value
    
    if (this.keyInput3.current.inputRef.current.value)
      filterParams[this.keyInput3.current.inputRef.current.value] = this.valueInput3.current.inputRef.current.value

    return {
      filterType: this.state.filterType,
      filterParams
    }
  }

  render = () => {
    return (
      <div className='CreateFiltrerNoduleForm'>
        <Dropdown
          placeholder='Select a Comparison Type'
          fluid
          selection
          options={[
            {key: 'EQUAL', text: 'EQUAL', value: 'EQUAL'},
            {key: 'GREATER', text: 'GREATER THAN', value: 'GREATER'},
            {key: 'GREATEREQUAL', text: 'GREATER THEN EQUAL TO', value: 'GREATEREQUAL'},
            {key: 'LESSER', text: 'LESSER THAN', value: 'LESSER'},
            {key: 'LESSEREQUAL', text: 'LESSER THEN EQUAL TO', value: 'LESSEREQUAL'}
          ]}
          onChange={this.handleChange}
        />

        <Grid columns={2} relaxed='very' stackable>
          <Grid.Column>
            <Input placeholder='Key' ref={this.keyInput1} style={{ width: '115px' }} />
            <Input placeholder='Key' ref={this.keyInput2} style={{ width: '115px' }} />
            <Input placeholder='Key' ref={this.keyInput3} style={{ width: '115px' }} />
          </Grid.Column>
          <Grid.Column>
            <Input placeholder='Value' ref={this.valueInput1} style={{ width: '115px' }} />
            <Input placeholder='Value' ref={this.valueInput2} style={{ width: '115px' }} />
            <Input placeholder='Value' ref={this.valueInput3} style={{ width: '115px' }} />
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default CreateFilterNoduleForm

