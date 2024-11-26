import { useSelector, useDispatch } from "react-redux";
import { addTask, setTodoInputValue } from './redux/todoSlice'

function Todo() {

    const value = useSelector((state) => state.todo.value)
    const list = useSelector((state) => state.todo.todoList)
    // const list = ['t1', 't2'];

    const dispatch = useDispatch();

    const handleChange = (ev) => {
        dispatch(setTodoInputValue(ev.target.value));
    }

    const handleAddTodo = () => {
        dispatch(addTask())
    }

    return (
        <>
            <h2>My Todo list</h2>
            <div style={{ display: 'flex' }}>
                <div className="input-box">
                    <input type="text" value={value} onChange={handleChange} />
                    <button onClick={handleAddTodo}>Add todo</button>
                </div>
                <div className="list">
                    <ul>
                        {list.map((task, idx) => <li key={idx}>{task}</li>)}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Todo;
