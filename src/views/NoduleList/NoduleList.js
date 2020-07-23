import React, { Component } from 'react'
import { Card, Icon, CardContent } from 'semantic-ui-react'
import './NoduleList.css'

import Nodule from '../../Models/Nodules'
import NoduleListController from '../../Controllers/NoduleListController'

class NoduleList extends Component {
  constructor () {
    super()

    this.nodules = new Nodule()
    this.controller = new NoduleListController()
    this.state = { nodules: this.nodules.getCollectionProps() }

    document.addEventListener('updateNodules', this.updateNoduleList)
  }

  updateNoduleList = () => {
    this.setState({nodules: this.nodules.getCollectionProps()})
  }

  renderTableListElements = () => {
    const { nodules } = this.state
    const noduleListElements = nodules.map(n => 
      <Card key={n.id} id={n.id}>
        <Card.Content>
          <Card.Header>{ n.label }</Card.Header>
          <Card.Meta>{`${n.tables.length} tables`}</Card.Meta>
        </Card.Content>
        <CardContent extra>
          <span 
          onClick={() => { this.controller.deleteNodule(n.id) }}
          style={{ cursor: 'pointer' }}>
            Delete <Icon name='trash' />
          </span>
          <span 
          onClick={() => { this.controller.logExportById(n.id) }}
          style={{ cursor: 'pointer' }}>
            View <Icon name='table' />
          </span>
        </CardContent>
      </Card>
    )
    return noduleListElements
  }

  render = () => {
    return (
      <div className='TableList'>
        <Card.Group>
          { this.renderTableListElements() }
        </Card.Group>
      </div>
    )
  }
}

export default NoduleList
