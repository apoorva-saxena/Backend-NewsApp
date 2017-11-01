import React, {Component} from 'react';
import './App.css';
import QuotesEdit from './components/quotes/QuotesForm'
import {FormGroup} from 'react-bootstrap/lib/FormGroup';
import {FormControl} from 'react-bootstrap/lib/FormControl';

class App extends Component {
  render() {
    return (
      <div>
        <QuotesEdit/>
      </div>
    )
  }
}

export default App;
