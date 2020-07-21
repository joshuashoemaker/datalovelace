import React, { Component } from 'react'
import { Input, Grid, Button, Icon, List } from 'semantic-ui-react'
import './CreateNodule.css'

class CreateTransformNoduleForm extends Component {
  constructor () {
    super()
    this.state = {
      structure: {}
    }

    this.initialKeyInput = React.createRef()
    this.newKeyInput = React.createRef()
    document.addEventListener('updateTables', this.updateTableList)
  }

  addStructureInput = () => {
    let structure = this.state.structure || {}

    const initialKey = this.initialKeyInput.current.inputRef.current.value
    const newKey = this.newKeyInput.current.inputRef.current.value

    if (initialKey && newKey) structure[initialKey] = newKey

    this.setState({ structure: structure })
  }

  getStructureProperties = () => {
    return this.state.structure
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
        <Grid columns={2} relaxed='very' stackable>
          <Grid.Column>
            <List celled>
              { structureElements.initialKeyElements }
            </List>
            <Input placeholder='Initial Key' ref={this.initialKeyInput} style={{ width: '115px' }} />
          </Grid.Column>
          <Grid.Column>
            <List celled>
              { structureElements.newKeyElements }
            </List>
            <Input placeholder='New Key' ref={this.newKeyInput} style={{ width: '115px' }} />
            <Button animated='vertical' onClick={this.addStructureInput}>
              <Button.Content hidden><Icon name='add' /></Button.Content>
              <Button.Content visible>Add</Button.Content>
            </Button>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default CreateTransformNoduleForm

