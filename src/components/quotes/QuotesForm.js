import React, {Component} from 'react'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import Textarea from 'react-textarea-autosize'
import FormControl from 'react-bootstrap/lib/FormControl'

class QuotesEdit extends Component {
  render() {
    return (
      <div>
        <FormGroup>
          <Textarea minRows={3} maxRows={10} defaultValue="Enter Quote..."></Textarea>
          <FormControl
            type="text"
            // value={this.state.value}
            placeholder="Enter Source"
            // onChange={this.handleChange}
          />

        </FormGroup>
      </div>
    )
  }
}

export default QuotesEdit