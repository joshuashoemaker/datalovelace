import React, { Component } from 'react'
import { Input, Dropdown, Grid, Button, Icon, List } from 'semantic-ui-react'
import './CreateNodule.css'

class CreateFilterNoduleForm extends Component {
  constructor () {
    super()
    this.state = {
      filterType: '',
      filterParams: {}
    }

    this.keyInput = React.createRef()
    this.valueInput = React.createRef()
    document.addEventListener('updateTables', this.updateTableList)
  }

  addKeyValueInput = () => {
    let filterParams = this.state.filterParams || {}

    if (this.keyInput.current.inputRef.current.value)
      filterParams[this.keyInput.current.inputRef.current.value] = this.valueInput.current.inputRef.current.value

    this.setState({ filterParams: filterParams })
  }

  handleChange = (e, value) => {
    this.setState({ filterType: value.value })
  }

  renderFilterParams = () => {
    const { filterParams } = this.state

    let filterKeyElements = []
    let filterValueElements = []
    for (let key in filterParams) {
      filterKeyElements.push(<List.Item>{key}</List.Item>)
      filterValueElements.push(<List.Item>{filterParams[key]}</List.Item>)
    }

    return { filterKeyElements, filterValueElements }
  }

  render = () => {
    const filterParamElements = this.renderFilterParams()
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
            <List celled>
              { filterParamElements.filterKeyElements }
            </List>
            <Input placeholder='Key' ref={this.keyInput} style={{ width: '115px' }} />
          </Grid.Column>
          <Grid.Column>
            <List celled>
              { filterParamElements.filterValueElements }
            </List>
            <Input placeholder='Key' ref={this.valueInput} style={{ width: '115px' }} />
            <Button animated='vertical' onClick={this.addKeyValueInput}>
              <Button.Content hidden><Icon name='add' /></Button.Content>
              <Button.Content visible>Add</Button.Content>
            </Button>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default CreateFilterNoduleForm

