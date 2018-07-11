import React from 'react'

class NumberKeys extends Component{
    onKeyPressed = (props) => {
        this.props.onKeyPressed(this.props.text)
    }
    constructor(){
        super();
        this.onKeyPressed = this.onKeyPressed.bind(this);
    }

    render(){
        return(
            <button
                type="button"
                onClick={this.onKeyPressed}
                className="btn btn-secondary btn-lg">{this.props.text}
            </button>
        )
    }
}

export default NumberKeys;
