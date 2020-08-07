import Charts from '../Models/Chart/Charts'

class CreateTableController {
  constructor() {
    this.charts = new Charts()
    this.updatedChartsEvent = new Event('updateCharts')
  }

  addNewChart = chart => {
    this.charts.addNewChart({
      label: chart.label,
      type: chart.type,
      table: chart.table,
      groupByValue: chart.groupByValue,
    })
    document.dispatchEvent(this.updatedChartsEvent)
  }
}

export default CreateTableController
