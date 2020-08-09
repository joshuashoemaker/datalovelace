import React, { Component } from 'react'
import { Button, Input, Header, Dropdown } from 'semantic-ui-react'

import Tables from '../../Models/Tables'
import Nodules from '../../Models/Nodules'
import CreateChartController from '../../Controllers/CreateChartController'
import chartTypes from '../../Constants/chartTypes'


class CreateChartForm extends Component {
  constructor () {
    super()
    this.tables = new Tables()

    this.state = {
      chartType: '',
      selectedTableId: '',
      tables: this.tables.getCollectionProps(),
      reportValue: '',
      headers : [],
      xAxisValue: '',
      yAxisValue: ''
    }

    this.tables = new Tables()
    this.nodules = new Nodules()
    this.controller = new CreateChartController()

    this.chartLabelInput = React.createRef()
    this.reportValueInput = React.createRef()

    document.addEventListener('updateTables', this.updateTableList)
  }

  clearInput = () => {
    this.setState({ noduleType: '' })
  }

  getChartTypeDropdownOptions = () => {
    const allChartTypes = Object.values(chartTypes).flat()
    return allChartTypes.map(t => {
      return {key: t, text: t, value: t}
    })
  }

  handleChartTypeChange = (e, value) => {
    this.setState({ chartType: value.value })
  }

  handleReportValueChange = (e, value) => {
    this.setState({ reportValue: value.value })
  }

  handleXAxisChange = (e, value) => {
    this.setState({ xAxisValue: value.value })
  }

  handleYAxisChange = (e, value) => {
    this.setState({ yAxisValue: value.value })
  }

  handleSelectedTableChange = (e, value) => {
    const selectedTable = this.tables.getById(value.value)
    this.setState({
      selectedTableId: value.value,
      headers: selectedTable.headers
    })
  }

  getTableDropDownOptions = () => {
    const { tables } = this.state
    const tableDropdownOptions = tables.map(t => {
      return {
        key: t.id,
        value: t.id,
        text: t.label
      }
    })
    return tableDropdownOptions
  }

  getHeaderDropDownOptions = () => {
    const { headers } = this.state
    const tableDropdownOptions = headers.map(h => {
      return {
        key: h,
        value: h,
        text: h
      }
    })
    return tableDropdownOptions
  }

  handleSubmit = () => {
    const { chartType, selectedTableId, reportValue, xAxisValue, yAxisValue } = this.state

    const chartLabel = this.chartLabelInput.current.inputRef.current.value
    const table = this.tables.getById(selectedTableId)
    this.controller.addNewChart({
      label: chartLabel,
      type: chartType,
      table: table,
      reportValue: reportValue,
      xAxis: xAxisValue,
      yAxis: yAxisValue
    })

    this.clearInput()
  }

  renderConfigOptions = () => {
    const { oneAxisCharts, twoAxisCharts } = chartTypes
    const { chartType } = this.state

    let configElements = []
    if (oneAxisCharts.includes(chartType)) configElements.push(
      <Dropdown
        value ={this.state.reportValue}
        placeholder='Report By'
        options={this.getHeaderDropDownOptions()}
        fluid
        selection
        style={{ width: '300px' }}
        onChange={this.handleReportValueChange}
      />
    )
    else if (twoAxisCharts.includes(chartType)) {
      configElements.push(
        <Dropdown
          value ={this.state.xAxisValue}
          placeholder='X-Axis'
          options={this.getHeaderDropDownOptions()}
          fluid
          selection
          style={{ width: '300px' }}
          onChange={this.handleXAxisChange}
        />
      )
      configElements.push(
        <Dropdown
          value ={this.state.yAxisValue}
          placeholder='Y-Axis'
          options={this.getHeaderDropDownOptions()}
          fluid
          selection
          style={{ width: '300px' }}
          onChange={this.handleYAxisChange}
        />
      )
    }
    return configElements
  }

  updateTableList = () => {
    this.setState({tables: this.tables.getCollectionProps()})
  }

  render = () => {
    return (
      <div className='CreateNodule'>
        <Header as='h3'>Create Graph</Header>

        <Input
          placeholder='Chart Label'
          ref={this.chartLabelInput}
          icon='tags'
          style={{ width: '300px' }}
        />

        <Dropdown
          value ={this.state.selectedTable}
          placeholder='Select a Table'
          options={this.getTableDropDownOptions()}
          fluid
          selection
          style={{ width: '300px' }}
          onChange={this.handleSelectedTableChange}
        />

        <Dropdown
          value ={this.state.chartType}
          placeholder='Select a Chart Type'
          options={this.getChartTypeDropdownOptions()}
          fluid
          selection
          style={{ width: '300px' }}
          onChange={this.handleChartTypeChange}
        />

        { this.renderConfigOptions() }

        <div className='creatTableFormSubmitButtons'>
          <Button content='Cancel' secondary />
          <Button content='Confirm' primary onClick={this.handleSubmit} />
        </div>
      </div>
    )
  }
}

export default CreateChartForm
