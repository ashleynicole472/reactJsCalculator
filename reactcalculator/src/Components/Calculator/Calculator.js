import React, { Component } from 'react';
import './Calculator.css'

class Calculator extends Component {
    constructor(props){
        super(props);
        this.state ={
            numbers: {
                one: '',
                two: '',
                three: '',
                four: '',
                five: '',
                six: '',
                seven: '',
                eight: '',
                nine: '',
                zero: ''
            },
            operators: {
                add: '+',
                subtract: '-',
                divide: '/',
                multiply: '*'
            },
            clear: ''
        }
        this.oneHandleClick = this.oneHandleClick.bind(this);
        this.twoHandleClick = this.twoHandleClick.bind(this);
        this.threeHandleClick = this.threeHandleClick.bind(this);
        this.fourHandleClick = this.fourHandleClick.bind(this);
        this.fiveHandleClick = this.fiveHandleClick.bind(this);
        this.sixHandleClick = this.sixHandleClick.bind(this);
        this.sevenHandleClick = this.sevenHandleClick.bind(this);
        this.eightHandleClick = this.eightHandleClick.bind(this);
        this.nineHandleClick = this.nineHandleClick.bind(this);
        this.zeroHandleClick = this.zeroHandleClick.bind(this);
        this.clearHandleClick = this.clearHandleClick.bind(this);
        this.equalsHandleClick = this.equalsHandleClick.bind(this);
    }

    oneHandleClick = () => {
        console.log("inside one");
        this.setState({
            one: '1'
        })
    }

    twoHandleClick = () => {
        
    }

    sevenHandleClick = () => {
        console.log("inside seven");
        this.setState({
            seven: '7'
        })
        console.log(this.state.seven);
    }
    render(){
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
                                placeholder=""
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
                                        onClick={this.sevenHandleClick}
                                        className="btn btn-secondary btn-lg">7</button>
                                </div>
                        </div>
                    </div>
                    <div className="col-sm-1">
                        <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                            <div className="btn-group mr-2" role="group" aria-label="First group">
                                <button type="button" className="btn btn-secondary btn-lg">8</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-1">
                        <div className="btn-toolbar"
                            role="toolbar"
                            aria-label="Toolbar with button groups">
                                <div className="btn-group mr-2" role="group" aria-label="First group">
                                    <button type="button" className="btn btn-secondary btn-lg">9</button>
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
                                    <button type="button" className="btn btn-secondary btn-lg">4</button>
                                </div>
                        </div>
                    </div>
                    <div className="col-sm-1">
                        <div className="btn-toolbar"
                            role="toolbar"
                            aria-label="Toolbar with button groups">
                                <div className="btn-group mr-2" role="group" aria-label="First group">
                                    <button type="button" className="btn btn-secondary btn-lg">5</button>
                                </div>
                        </div>
                    </div>
                    <div className="col-sm-1">
                        <div className="btn-toolbar"
                            role="toolbar"
                            aria-label="Toolbar with button groups">
                                <div className="btn-group mr-2" role="group" aria-label="First group">
                                    <button type="button" className="btn btn-secondary btn-lg">6</button>
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
                                    <button type="button" className="btn btn-secondary btn-lg">1</button>
                                </div>
                        </div>
                    </div>
                    <div className="col-sm-1">
                        <div className="btn-toolbar"
                            role="toolbar"
                            aria-label="Toolbar with button groups">
                                <div className="btn-group mr-2" role="group" aria-label="First group">
                                    <button type="button" className="btn btn-secondary btn-lg">2</button>
                                </div>
                        </div>
                    </div>
                    <div className="col-sm-1">
                        <div className="btn-toolbar"
                            role="toolbar"
                            aria-label="Toolbar with button groups">
                                <div className="btn-group mr-2" role="group" aria-label="First group">
                                    <button type="button" className="btn btn-secondary btn-lg">3</button>
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
                                    <button type="button" className="btn btn-secondary btn-lg">0</button>
                                </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="btn-group operations" role="group" aria-label="Basic example">
                            <button type="button" className="btn btn-secondary btn-lg operations">+</button>
                            <button type="button" className="btn btn-secondary btn-lg operations">−</button>
                            <button type="button" className="btn btn-secondary btn-lg operations">÷</button>
                            <button type="button" className="btn btn-secondary btn-lg operations">×</button>
                        </div>
                    </div>
                    <div className="col-sm-4"></div>
                </div>
                <div className="row">
                    <div className="col-sm-4"></div>
                    <div className="col-sm-3">
                        <button type="button" className="btn btn-primary btn-lg btn-block">=</button>
                    </div>
                    <div className="col-sm-4"></div>
                </div>
                <div className="row">
                    <div className="col-sm-4"></div>
                    <div className="col-sm-3">
                    <button type="button" className="btn btn-primary btn-lg btn-block">Clear</button>
                    </div>
                    <div className="col-sm-4"></div>
                </div>
            </div>
        )
    }
}

export default Calculator;
