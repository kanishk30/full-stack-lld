import React from 'react'


class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            newTodo: ''
        }
        console.log('[Constructor called: setting up initial binds]')
    }

    componentDidMount() {
        console.log('[componentDidMount] called...')

        // simulate api call...
        setTimeout(() => {
            this.setState({
                todos: ['Walk daily', 'Read a book', 'Code 1 question']
            })
        }, 1000)
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('[componentDidUpdate] called')
        // console.log('prevProps', prevProps)
        // console.log('prevState', prevState)
        // console.log('current stste', this.state);

        if (prevState.todos !== this.state.todos) {
            console.log('updated to-dos:...', this.state.todos)
        }
    }

    componentWillUnmount() {
        console.log('componentWIllUnmount called')
    }

    handleInputChange = (ev) => {
        this.setState({ newTodo: ev.target.value })
    }

    handleAddTodo = () => {
        // add "this.state.newTodo" in todos [].
        // clear newTodo input field

        // this.setState({
        //     todos: [...this.state.todos, this.state.newTodo],
        //     newTodo: ''
        // })

        this.setState((prevState) => ({
            todos: [...prevState.todos, prevState.newTodo],
            newTodo: ''
        }))
    }

    render() {
        return (
            <div>
                <h2>My todo list</h2>
                <ul>
                    {this.state.todos.map((todo, i) => (
                        <li key={i}>{todo}</li>
                    ))}
                </ul>
                <input
                    type='text'
                    placeholder='Add todos...'
                    value={this.state.newTodo}
                    onChange={this.handleInputChange}
                />
                <button onClick={this.handleAddTodo}>Add to-do</button>
            </div>
        )
    }

}

export default TodoList