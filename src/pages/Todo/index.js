import { useEffect, useState } from 'react'
import './index.css'

const Todo = () => {
  const [todoList, setTodoList] = useState([
    { id: 1, value: 'item 1' },
    { id: 2, value: 'item 2' },
    { id: 3, value: 'item 3' },
  ])
  const [itemToAdd, setItemToAdd] = useState('')
  let output = <p>The list is empty</p>

  useEffect(() => {}, [itemToAdd, todoList])

  // put your code here (don't delete this line)

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleChange = (e) => {
    setItemToAdd(e.target.value)
  }

  output = todoList.map((item) => (
    <li key={item.id}>
      <span className="item-wrapper">{item.value}</span>
      <input name={item.id} onChange={handleEditChange} />
      <button onClick={() => del(item.id)} id={item.id}>
        delete
      </button>
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
        <form onSubmit={handleSubmit}>
          <label>
            <input name="add-item" value={itemToAdd} onChange={handleChange} />
            <button>Add item</button>
          </label>
        </form>
      </div>
    </div>
  )
}

export default Todo
