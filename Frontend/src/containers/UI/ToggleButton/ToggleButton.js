import React, { Component } from 'react'

class ToggleButton extends Component {
    state = {
        on: false
    }

    toggle = () => {
        this.setState({ on: !this.state.on })
    }

    render() {
        return(
            <div>
                <button onClick={this.toggle}>Show/Hide</button>
            </div>
        )
    }
}

export default ToggleButton