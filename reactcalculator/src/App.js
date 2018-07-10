import React, { Component } from 'react';
import CompleteCalculator from './Container/Calculator/Calculator.js';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <CompleteCalculator />
            </div>
        );
      }
    }

export default App;
