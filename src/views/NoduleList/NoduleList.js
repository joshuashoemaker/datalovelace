import React, { Component } from 'react'
import { Card, Icon, CardContent } from 'semantic-ui-react'
import NoduleListItem from './NoduleListItem'
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
    const noduleListElements = nodules.map(n => <NoduleListItem nodule={n} /> )
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
