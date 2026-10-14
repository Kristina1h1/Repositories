import React from "react";

class Range extends React.Component{

    state = { val: "100" }

    range = (event) => {
        this.setState({val: event.target.value})
    }

    render(){
        return (
            <>
                <input type="range" onInput={this.range} min="0"  max="400" step="10" />
                {/* <p>{this.state.val}</p> */}
                <p>{this.state.val}px * {this.state.val}px</p>

                <div
                    style={{
                        width: this.state.val + "px",
                        height: this.state.val + "px",
                        backgroundColor: "blue"
                    }}
                />

            </>
        )
    }
}

export default Range;