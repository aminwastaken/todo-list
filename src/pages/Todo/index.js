import { useEffect, useState } from "react";
import "./index.css";

const Todo = () => {
  const [todoList, setTodoList] = useState([{ id: 1, value: "allo" }]);
  const [itemToAdd, setItemToAdd] = useState("");
  let output = <p>The list is empty</p>;

  useEffect(() => {}, [itemToAdd, todoList]);

  // put your code here (don't delete this line)
  const del = (id) => {
    setTodoList(
      todoList.filter((item) => {
        if (item.id !== id) {
          return item;
        }
      })
    );
  };

  const handleEditChange = (e) => {
    if (todoList != []) {
      // checking whether or no the array is empty
      setTodoList(
        // changing the value of item in the state variable
        todoList.map((item) => {
          if (item.id != e.target.name) {
            //getting value from input
            return item;
          } else return { id: item.id, value: e.target.value };
        })
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const addItem = (item) => {
    var items = todoList;
    var newItem = { id: todoList.length + 1, value: item };
    items.push(newItem);
    // console.log(newTable);
    // console.log(items);
    setTodoList(items);
    setItemToAdd("");
  };

  const handleChange = (e) => {
    setItemToAdd(e.target.value);
  };

  output = todoList.map((item) => (
    <li key={item.id}>
      <span className="item-wrapper">{item.value}</span>
      <input name={item.id} onChange={handleEditChange} />
      <button onClick={() => del(item.id)} id={item.id}>
        delete
      </button>
    </li>
  ));
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
            <button onClick={() => addItem(itemToAdd)}>Add item</button>
          </label>
        </form>
      </div>
    </div>
  );
};

export default Todo;
