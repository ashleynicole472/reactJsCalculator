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
        this.equals = this.equals.bind(this);
    }

    oneHandleClick = () => {
        console.log("inside one");
        this.setState({
            one: '1'
        })
    }

    twoHandleClick = () => {
        console.log("inside two");
        this.setState({
            two: '2'
        })
    }

    threeHandleClick = () => {
        console.log("inside three");
        this.setState({
            three: '3'
        })
    }

    fourHandleClick = () => {
        console.log("inside four");
        this.setState({
            four: '4'
        })
    }

    fiveHandleClick = () => {
        console.log("inside five");
        this.setState({
            five: '5'
        })
    }

    sixHandleClick = () => {
        console.log("inside six");
        this.setState({
            six: '6'
        })
    }

    sevenHandleClick = () => {
        console.log("inside seven");
        this.setState({
            seven: '7'
        })
        console.log(this.state.seven);
    }

    eightHandleClick = () => {
        console.log("inside eight");
        this.setState({
            eight: '8'
        })
    }

    nineHandleClick = () => {
        console.log("inside nine");
        this.setState({
            nine: '9'
        })
    }

    zeroHandleClick = () => {
        console.log("inside zero");
        this.setState({
            zero: '0'
        })
    }

    clearHandleClick = () => {
        console.log("inside clear");
        this.setState({
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
            }
        })
    }

    equals = () => {

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
                                    onClick={this.eightHandleClick}
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
                                        onClick={this.nineHandleClick}
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
                                        onClick={this.fourHandleClick}
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
                                        onClick={this.fiveHandleClick}
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
                                        onClick={this.sixHandleClick}
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
                                        onClick={this.oneHandleClick}
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
                                        onClick={this.twoHandleClick}
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
                                        onClick={this.threeHandleClick}
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
                                        onClick={this.zeroHandleClick}
                                        className="btn btn-secondary btn-lg">0
                                    </button>
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
