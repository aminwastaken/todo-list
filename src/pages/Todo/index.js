import { useEffect, useState } from 'react'
import './index.css'

const Todo = () => {
  const [todoList, setTodoList] = useState(['item1', 'item2', 'item3'])
  let output = <p>The list is empty</p>

  output = todoList.map((item) => (
    <li>
      {item}
      <button>edit</button>
      <button>delete</button>
    </li>
  ))
  return (
    <div className="todo-container">
      <div className="block-container">
        <h1>Todo list</h1>
      </div>

      <div className="block-container">
        <ul>{output}</ul>
      </div>

      <div className="block-container">
        <form>
          <label>
            <input /> <button>Add item</button>
          </label>
        </form>
      </div>
    </div>
  )
}

export default Todo
