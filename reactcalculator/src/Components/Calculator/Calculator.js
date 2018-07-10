import React, { Component } from 'react';

const NUMBER = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    zero: 0
}

const OPERATOR = {
    add: '+',
    subtract: '-',
    divids: '/',
    multiply: '*'
}

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
                add: '',
                subtract: '',
                divide: '',
                multiply: ''
            },
            clear: ''
        }
    }
    render(){
        return(
            <div>
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
                                id="inputLarge" />
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
                                    <button type="button" className="btn btn-secondary btn-lg">7</button>
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

                    </div>
                    <div className="col-sm-4"></div>
                </div>
                <div className="row">
                    <div className="col-sm-4"></div>
                    <div className="col-sm-1">

                    </div>
                    <div className="col-sm-1">

                    </div>
                    <div className="col-sm-1">

                    </div>
                    <div className="col-sm-4"></div>
                </div>
            </div>
        )
    }
}

export default Calculator;
