const valideTypes = [
  'application/json'
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
    const data = await new Response(this.file).text()
    return JSON.parse(data)
  }

  setFile = file => {
    if (this.validateFileType(file)) this.file = file
  }

  validateFileType= file=> valideTypes.includes(file.type)
}

export default FileAccess