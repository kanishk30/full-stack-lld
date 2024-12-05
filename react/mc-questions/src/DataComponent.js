import React from 'react'

// WrappedComponent
const DataComponent = (props) => {
    return (
        <div>
            <h1>Data loaded</h1>
            <p>{props.data}</p>
        </div>
    )
}

export default DataComponent