import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {
  let [todos, setTodos] = useState([{task:"Sample", id: uuidv4}]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTodo =()=>{
    setTodos([...todos,{task:newTodo, id:uuidv4}]);
    setNewTodo("");
  };

  let updateTodoValue=(event)=>{
    setNewTodo(event.target.value);
  }

  return (
    <div>
      <h3>Todo List</h3>
      <input type="text" placeholder="Add a task" value={newTodo} onChange={updateTodoValue} />
      <br />
      <button onClick={addNewTodo}>Add Task</button>
      <br />
      <h4>Task List</h4>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.task}</li>
        ))}
      </ul>
    </div>
  );
}
