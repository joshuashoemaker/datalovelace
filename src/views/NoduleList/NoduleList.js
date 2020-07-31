import React, { Component } from 'react'
import { Card, Icon, Button } from 'semantic-ui-react'
import CreateNodule from '../CreateNodule/CreateNodule'
import NoduleListItem from './NoduleListItem'
import './NoduleList.css'

import Nodule from '../../Models/Nodules'
import NoduleListController from '../../Controllers/NoduleListController'

class NoduleList extends Component {
  constructor () {
    super()

    this.nodules = new Nodule()
    this.controller = new NoduleListController()
    this.state = {
      adding: false,
      nodules: this.nodules.getCollectionProps()
    }

    document.addEventListener('updateNodules', this.updateNoduleList)
  }

  toggleAddingNodule = () => { this.setState({ adding: !this.state.adding }) }

  updateNoduleList = () => {
    this.setState({nodules: this.nodules.getCollectionProps()})
  }

  renderTableListElements = () => {
    const { nodules } = this.state
    const noduleListElements = nodules.map(n => <NoduleListItem nodule={n} /> )
    return noduleListElements
  }

  render = () => {
    return (
      <div className='NoduleList'>
        <Card.Group>
          <Button animated primary style={{ width: '100%', display: 'block' }} onClick={this.toggleAddingNodule}>
            <Button.Content visible>Add Nodule</Button.Content>
            <Button.Content hidden><Icon name='add' /></Button.Content>
          </Button>
          {this.state.adding ? <CreateNodule /> : ''}
          { this.renderTableListElements() }
        </Card.Group>
      </div>
    )
  }
}

export default NoduleList
