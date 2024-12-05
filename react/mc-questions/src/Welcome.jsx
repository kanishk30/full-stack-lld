import React, { Component } from 'react'

class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            btnText: 'Click'
        }
    }

    render() {
        return (
            <React.Fragment>

                <h1>Hello, class based component. {this.props.name}</h1>
                <div>
                    <p>Count: {this.state.count}</p>
                    <button onClick={() => this.setState({ count: this.state.count + 1, btnText: 'Increment' })}>
                        {this.state.btnText}
                    </button>
                </div>
            </React.Fragment>
        )
    }
}

// const Welcome = (props) => {
//     return <h1>Hello, class based component. {props.name}</h1>
// }

export default Welcome;