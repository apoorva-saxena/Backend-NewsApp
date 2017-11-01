import React, {Component} from 'react'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import Textarea from 'react-textarea-autosize'
import FormControl from 'react-bootstrap/lib/FormControl'
import ListGroup from 'react-bootstrap/lib/ListGroup'
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem'
import LaddaButton from 'react-ladda'
import 'ladda/dist/ladda-themeless.min.css'
import './QuotesForm.css'
import {quotes} from '../../data'

console.log(quotes)
class QuotesEdit extends Component {

  constructor(props) {
    super(props)
    this.state = {
      pressQuote: {
        value: '',
        source: ''
      }
    }
  }

  handleSubmit = (event) => {
    console.log("I was called")
    alert('event: ', event)
  }

  handleChangeValue = (e) => {}

  handleChangeSource = (e) => {}

  render() {
    return (
      <div>
        <ListGroup>
          {quotes.map(quote => <ListGroupItem>
            <span>{quote.value}: {quote.source}</span>
          </ListGroupItem>)}
        </ListGroup>
        <Textarea
          className='QuotesEdit__text-area'
          value={this.state.pressQuote.value}
          style={{
          minHeight: 20,
          maxHeight: 80
        }}
          onChange={this.handleChangeValue}
          placeholder='Enter Value...'/>
        <FormControl
          type='text'
          value={this.state.pressQuote.source}
          placeholder='Enter Source...'
          onChange={this.handleChangeSource}/>
          <LaddaButton>Add</LaddaButton>
      </div>
    )
  }
}

export default QuotesEdit