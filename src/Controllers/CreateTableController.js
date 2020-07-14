import Tables from '../Collections/Tables'
import FileAccess from '../Services/FileAccess'

class CreateTableController {
  constructor(props) {
    this.tables = new Tables()
    this.fileAccess = new FileAccess() 
  }
}

export default CreateTableController
