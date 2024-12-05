import React from 'react'

// Higher Order component...
const withLoading = (WrappedComponent) => {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                loading: true
            }
        }

        componentDidMount() {
            // simulating api call...
            setTimeout(() => {
                this.setState({ loading: false })
            }, 2000)
        }

        render() {
            if (this.state.loading) {
                return <h4>Loading... Please wait!!</h4>
            }

            return <WrappedComponent {...this.props} />
        }
    }
}

export default withLoading