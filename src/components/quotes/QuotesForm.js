import React, {Component} from 'react'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import Textarea from 'react-textarea-autosize'
import FormControl from 'react-bootstrap/lib/FormControl'
import LaddaButton from 'react-ladda'
import 'ladda/dist/ladda-themeless.min.css'
import './QuotesForm.css'

class QuotesEdit extends Component {
  constructor() {
    super()
  }

  handleSubmit = (event) => {
    console.log("I was called")
    alert('event: ', event)
  }

  handleChangeValue = (e) => {

  }

  handleChangeSource = (e) => {

  }

  render() {
    return (
     <div>
      
      </div>
    )
  }
}

export default QuotesEdit