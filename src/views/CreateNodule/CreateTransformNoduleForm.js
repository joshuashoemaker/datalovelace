import React, { Component } from 'react'
import { Input, Grid, Button, Icon, List, Dropdown } from 'semantic-ui-react'
import Tables from '../../Models/Tables'
import './CreateNodule.css'

class CreateTransformNoduleForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      structure: {},
      tables: props.tables
    }

    this.tables = new Tables()

    this.initialKeyInput = React.createRef()
    this.newKeyInput = React.createRef()
    document.addEventListener('updateTables', this.updateTableList)
  }

  addStructureInput = () => {
    let { structure, keyValue } = this.state

    // const initialKey = this.initialKeyInput.current.inputRef.current.value
    const newKey = this.newKeyInput.current.inputRef.current.value

    if (keyValue && newKey) structure[keyValue] = newKey

    this.setState({ structure: structure })
  }

  componentWillReceiveProps = nextProps => {
    this.setState({tables: nextProps.tables})
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

  getStructureProperties = () => {
    return this.state.structure
  }

  handleKeyChange = (e, value) => {
    this.setState({ keyValue: value.value })
  }

  renderStructure = () => {
    const { structure } = this.state

    let initialKeyElements = []
    let newKeyElements = []
    for (let key in structure) {
      initialKeyElements.push(<List.Item>{key}</List.Item>)
      newKeyElements.push(<List.Item>{structure[key]}</List.Item>)
    }

    return { initialKeyElements, newKeyElements }
  }

  render = () => {
    const structureElements = this.renderStructure()
    return (
      <div className='CreateFiltrerNoduleForm'>
        <Grid columns={2} stackable>
          <Grid.Column>
            <List celled>
              { structureElements.initialKeyElements }
            </List>


            {/* <Input placeholder='Initial Key' ref={this.initialKeyInput} fluid /> */}
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
              { structureElements.newKeyElements }
            </List>
            <Input placeholder='New Key' ref={this.newKeyInput} fluid />
          </Grid.Column>
        </Grid>
            <Button fluid animated='vertical' onClick={this.addStructureInput}>
              <Button.Content hidden><Icon name='add' /></Button.Content>
              <Button.Content visible>Add</Button.Content>
            </Button>
      </div>
    )
  }
}

export default CreateTransformNoduleForm

