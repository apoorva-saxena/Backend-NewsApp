import React, {Component} from 'react'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import Textarea from 'react-textarea-autosize'
import FormControl from 'react-bootstrap/lib/FormControl'
import LaddaButton from 'react-ladda'
import 'ladda/dist/ladda-themeless.min.css'
import './QuotesForm.css'
import {data} from '../../data'

console.log(data)

class QuotesEdit extends Component {

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
      <ListGroup></ListGroup>
      </div>
    )
  }
}

export default QuotesEdit