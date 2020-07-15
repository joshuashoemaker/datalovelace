import Tables from '../Collections/Tables'
import FileAccess from '../Services/FileAccess'

class CreateTableController {
  constructor() {
    this.tables = new Tables()
    this.fileAccess = new FileAccess() 
    this.updatedTablesEvent = new Event('updateTables')
  }

  submitLocalFile = async submition => {
    const { label, file } = submition
    this.fileAccess.setFile(file)
    const fileData = await this.fileAccess.readFile()

    this.tables.addNewTable({
      label: label,
      rows: fileData
    })
    document.dispatchEvent(this.updatedTablesEvent)
  }
}

export default CreateTableController
