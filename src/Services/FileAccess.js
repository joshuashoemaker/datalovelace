import { excel2json }  from 'js2excel'

const valideTypes = [
  { generalType: 'json', fileType: 'application/json' },
  { generalType: 'excel', fileType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' },
  { generalType: 'excel', fileType: 'application/vnd.ms-excel' },
]

class FileAccess {
  constructor (props) {
    this.reader = new FileReader()
    if (this.props) {
      if (props.file) this.setFile(props.file)
    }
  }

  readFile = async () => {
    if (!this.file) return
    const fileTypeInformation = valideTypes.find(t => {
     return  t.fileType === this.file.type
    })
    const generalType = fileTypeInformation.generalType

    let parsedData = []
    if (generalType === 'json') parsedData = await this.parseJsonFile()
    if (generalType === 'excel') parsedData = await this.parseExcelFile()

    return parsedData
  }

  parseExcelFile = async () => {
    return new Promise((resolve, reject) => {
      excel2json([this.file] , data => {
        if (data) {
          const sheetNames = Object.keys(data)
          resolve(data[sheetNames[0]])
        }
        else { reject(data) }
      }, 'rows')
    })
  }

  parseJsonFile = async () => {
    const data = await new Response(this.file).text()
    return JSON.parse(data)
  }


  setFile = file => {
    if (this.validateFileType(file)) this.file = file
  }

  validateFileType= file => {
    const valideFileTypes = valideTypes.map(t => t.fileType)
    return valideFileTypes.includes(file.type)
  }
}

export default FileAccess