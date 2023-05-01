import React, { useCallback, useState } from 'react'

const Todo = () => {

  let [todoItem,setTodoItem] = useState([]);
  let addTodo = (e) => {
    e.preventDefault();
    setTodoItem([
        ...todoItem, {"name":e.target.elements.todoItem.value, id:todoItem.length+1 }
    ])
  }

  let removeItem = (id) => {
    setTodoItem(todoItem.filter(el=>el.id !== id)) 
  }

  let clearAll = () => {
    setTodoItem([])
  }

  return (
    <>
    <h2>Todo</h2>
    <form onSubmit={(e)=>addTodo(e)}>
        <input type='text' name = "todoItem" />
        <button>Add</button>
    </form>
    <hr />
    <ul className='list-group'>
        {
            todoItem.map(todo=>{
                return(
                    <li className='list-group-item d-flex justify-content-between align-items-center' key = {todo.id}>{todo.name}
                        <span><button onClick={()=>removeItem(todo.id)}>x</button></span>
                    </li>
                )
            })
        }
    </ul>
    <button onClick={clearAll}>ClearAll</button>
    </>    
  )
}

export default Todo