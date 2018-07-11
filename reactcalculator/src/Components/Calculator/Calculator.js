import React, { Component } from 'react';
import './Calculator.css'

class Calculator extends Component {
    constructor(props){
        super(props);
        this.state ={
            equation: [],
            equals: '',
            displayValue: '0'
        }
        this.equals = this.equals.bind(this);
        this.buttonClicked = this.buttonClicked.bind(this);
        this.dotClicked = this.dotClicked.bind(this);
        this.clearDisplay = this.clearDisplay.bind(this);
    }

    buttonClicked = (digit) => {
        console.log(`${digit} was clicked`);
        var { equation, displayValue } = this.state;
        //allows the display number to change from 0 to whatever
        //digit the user pressed, can be more then just one single digit at a time
        //if the display number is zero then leave it at zero else change to the
        //selected digets
        this.setState({
            displayValue: displayValue === '0' ? String(digit) : displayValue + digit
        })
    };

    dotClicked = () => {
        var { displayValue } = this.state
        //allows for only one decimal point to be within the selected digits
        //indexOf function finds whatever argument is within the perentesis and checks if
        //its within the given string.
        if(displayValue.indexOf('.') === -1){
            this.setState({
                //makes displayValue whatever it previously was plus a decimal
                displayValue: displayValue + '.'
            })
        }
    }

    clearDisplay = () => {
        var { displayValue } = this.state

        this.setState({
            displayValue: '0'
        })
    }

    equals = () => {
        var finalEquation = this.state.equation
        var num1 = finalEquation[0]
        var num2 = finalEquation[2]
        var operation = finalEquation[1]
        switch(operation){
            case "+":
                var answer = num1 + num2;
                this.setState({
                    displayValue: answer
                })
            break;
            case "-":
                var answer = num1 - num2;
                this.setState({
                    displayValue: answer
                })
            break;
            case "*":
                var answer = num1 * num2;
                this.setState({
                    displayValue: answer
                })
            break;
            case "/":
                var answer = num1 / num2;
                this.setState({
                    displayValue: answer
                })
            break
            default:
                var answer = "err";
                this.setState({
                    displayValue: answer
                })
            break;
        }
    }
    render(){
        const { displayValue } = this.state
        return(
            <div className="calculator-container">
                <div className="row">
                    <div className="col-sm-4">
                    </div>
                    <div className="col-sm-3">
                        <div className="form-group">
                            <label
                                className="col-form-label col-form-label-lg"
                                for="inputLarge">React Calculator
                            </label>
                            <input
                                className="form-control form-control-lg currentInput"
                                type="text"
                                placeholder={displayValue}
                                id="inputLarge"
                                disabled />
                        </div>
                    </div>
                    <div className="col-sm-4"></div>
                </div>
                <div className="row">
                    <div className="col-sm-4">
                    </div>
                    <div className="col-sm-1">
                        <div className="btn-toolbar"
                            role="toolbar"
                            aria-label="Toolbar with button groups">
                                <div className="btn-group mr-2" role="group" aria-label="First group">
                                    <button
                                        type="button"
                                        onClick={() => this.buttonClicked(7)}
                                        className="btn btn-secondary btn-lg">7
                                    </button>
                                </div>
                        </div>
                    </div>
                    <div className="col-sm-1">
                        <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                            <div className="btn-group mr-2" role="group" aria-label="First group">
                                <button
                                    type="button"
                                    onClick={() => this.buttonClicked(8)}
                                    className="btn btn-secondary btn-lg">8
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-1">
                        <div className="btn-toolbar"
                            role="toolbar"
                            aria-label="Toolbar with button groups">
                                <div className="btn-group mr-2" role="group" aria-label="First group">
                                    <button
                                        type="button"
                                        onClick={() => this.buttonClicked(9)}
                                        className="btn btn-secondary btn-lg">9
                                    </button>
                                </div>
                        </div>
                    </div>
                    <div className="col-sm-4"></div>
                </div>
                <div className="row">
                    <div className="col-sm-4"></div>
                    <div className="col-sm-1">
                        <div className="btn-toolbar"
                            role="toolbar"
                            aria-label="Toolbar with button groups">
                                <div className="btn-group mr-2" role="group" aria-label="First group">
                                    <button
                                        type="button"
                                        onClick={() => this.buttonClicked(4)}
                                        className="btn btn-secondary btn-lg">4
                                    </button>
                                </div>
                        </div>
                    </div>
                    <div className="col-sm-1">
                        <div className="btn-toolbar"
                            role="toolbar"
                            aria-label="Toolbar with button groups">
                                <div className="btn-group mr-2" role="group" aria-label="First group">
                                    <button
                                        type="button"
                                        onClick={() => this.buttonClicked(5)}
                                        className="btn btn-secondary btn-lg">5
                                    </button>
                                </div>
                        </div>
                    </div>
                    <div className="col-sm-1">
                        <div className="btn-toolbar"
                            role="toolbar"
                            aria-label="Toolbar with button groups">
                                <div className="btn-group mr-2" role="group" aria-label="First group">
                                    <button
                                        type="button"
                                        onClick={() => this.buttonClicked(6)}
                                        className="btn btn-secondary btn-lg">6
                                    </button>
                                </div>
                        </div>
                    </div>
                    <div className="col-sm-4"></div>
                </div>
                <div className="row">
                    <div className="col-sm-4"></div>
                    <div className="col-sm-1">
                        <div className="btn-toolbar"
                            role="toolbar"
                            aria-label="Toolbar with button groups">
                                <div className="btn-group mr-2" role="group" aria-label="First group">
                                    <button
                                        type="button"
                                        onClick={() => this.buttonClicked(1)}
                                        className="btn btn-secondary btn-lg">1
                                    </button>
                                </div>
                        </div>
                    </div>
                    <div className="col-sm-1">
                        <div className="btn-toolbar"
                            role="toolbar"
                            aria-label="Toolbar with button groups">
                                <div className="btn-group mr-2" role="group" aria-label="First group">
                                    <button
                                        type="button"
                                        onClick={() => this.buttonClicked(2)}
                                        className="btn btn-secondary btn-lg">2
                                    </button>
                                </div>
                        </div>
                    </div>
                    <div className="col-sm-1">
                        <div className="btn-toolbar"
                            role="toolbar"
                            aria-label="Toolbar with button groups">
                                <div className="btn-group mr-2" role="group" aria-label="First group">
                                    <button
                                        type="button"
                                        onClick={() => this.buttonClicked(3)}
                                        className="btn btn-secondary btn-lg">3
                                    </button>
                                </div>
                        </div>
                    </div>
                    <div className="col-sm-4"></div>
                </div>
                <div className="row">
                    <div className="col-sm-4"></div>
                    <div className="col-sm-1">
                        <div className="btn-toolbar"
                            role="toolbar"
                            aria-label="Toolbar with button groups">
                                <div className="btn-group mr-2" role="group" aria-label="First group">
                                    <button
                                        type="button"
                                        onClick={() => this.buttonClicked(0)}
                                        className="btn btn-secondary btn-lg">0
                                    </button>
                                </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="btn-group operations" role="group" aria-label="Basic example">
                            <button
                                type="button"
                                onClick={() => this.dotClicked(".")}
                                className="btn btn-secondary btn-lg operations">.
                            </button>
                            <button
                                type="button"
                                onClick={() => this.buttonClicked("+")}
                                className="btn btn-secondary btn-lg operations">+
                            </button>
                            <button
                                type="button"
                                onClick={() => this.buttonClicked("-")}
                                className="btn btn-secondary btn-lg operations">−
                            </button>
                            <button
                                type="button"
                                onClick={() => this.buttonClicked("/")}
                                className="btn btn-secondary btn-lg operations">÷
                            </button>
                            <button
                                type="button"
                                onClick={() => this.buttonClicked("*")}
                                className="btn btn-secondary btn-lg operations">×
                            </button>
                        </div>
                    </div>
                    <div className="col-sm-4"></div>
                </div>
                <div className="row">
                    <div className="col-sm-4"></div>
                    <div className="col-sm-3">
                        <button
                            type="button"
                            onClick={this.equals}
                            className="btn btn-primary btn-lg btn-block">=
                        </button>
                    </div>
                    <div className="col-sm-4"></div>
                </div>
                <div className="row">
                    <div className="col-sm-4"></div>
                    <div className="col-sm-3">
                    <button
                        type="button"
                        onClick={() => this.clearDisplay()}
                        className="btn btn-primary btn-lg btn-block">Clear
                    </button>
                    </div>
                    <div className="col-sm-4"></div>
                </div>
            </div>
        )
    }
}

export default Calculator;
