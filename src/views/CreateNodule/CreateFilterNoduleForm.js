import React, { Component } from 'react'
import { Input, Dropdown, Grid, Button, Icon, List } from 'semantic-ui-react'
import Tables from '../../Models/Tables'
import './CreateNodule.css'

class CreateFilterNoduleForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      filterType: '',
      filterParams: {},
      tables: props.tables
    }

    this.tables = new Tables()

    this.keyInput = React.createRef()
    this.valueInput = React.createRef()
    document.addEventListener('updateTables', this.updateTableList)
  }

  addKeyValueInput = () => {
    let filterParams = this.state.filterParams || {}

    if (this.state.keyValue)
      filterParams[this.state.keyValue] = this.valueInput.current.inputRef.current.value

    this.setState({ filterParams: filterParams })
  }

  componentWillReceiveProps = nextProps => {
    this.setState({tables: nextProps.tables})
  }

  handleComparisonChange = (e, value) => {
    this.setState({ filterType: value.value })
  }

  handleKeyChange = (e, value) => {
    this.setState({ keyValue: value.value })
  }

  getFilterProperties = () => {
    const { filterType, filterParams } = this.state
    return { filterType, filterParams }
  }

  getHeadersDropDownOptions = () => {
    const { tables } = this.state
    if (!tables || tables.length === 0) return []

    const headers = tables.map(t => {
      const table = this.tables.getTableByLabel(t)
      return table.headers
    }).flat()

    const dropdownOptions = headers.map(h => {
      return { key: h, text: h, value: h }
    })
    return dropdownOptions
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
          onChange={this.handleComparisonChange}
        />

        <Grid columns={2} stackable>
          <Grid.Column>
            <List celled>
              { filterParamElements.filterKeyElements }
            </List>

            <Dropdown
              clearable
              search
              header='Headers'
              placeholder='Header Key'
              fluid
              selection
              options={this.getHeadersDropDownOptions()}
              onChange={this.handleKeyChange}
            />

          </Grid.Column>
          <Grid.Column>
            <List celled>
              { filterParamElements.filterValueElements }
            </List>
            <Input placeholder='Value' ref={this.valueInput} fluid />
          </Grid.Column>
        </Grid>
        <Button fluid animated='vertical' onClick={this.addKeyValueInput}>
          <Button.Content hidden><Icon name='add' /></Button.Content>
          <Button.Content visible>Add</Button.Content>
        </Button>
      </div>
    )
  }
}

export default CreateFilterNoduleForm

