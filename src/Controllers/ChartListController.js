import Charts from '../Models/Chart/Charts'
import FocusChart from '../Models/Chart/FocusChart'

class ChartListController {
  constructor() {
    this.charts = new Charts()
    this.focusChart = new FocusChart()
    this.updatedChartsEvent = new Event('updateCharts')
    this.setSelectedChartEvent = new Event('setSelectedChart')
  }

  deleteChart = id => {
    this.charts.removeById(id)
    document.dispatchEvent(this.updatedChartsEvent)
  }

  selectChartToView = id => {
    const chart = this.charts.getById(id)
    this.focusChart.chart = chart
    document.dispatchEvent(this.setSelectedChartEvent)
  }
}

export default ChartListController