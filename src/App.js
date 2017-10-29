import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import QuotesEdit from './components/quotes/QuotesForm'

class App extends Component {
  render() {
    return (
      <QuotesEdit/>
    );
  }
}

export default App;
