import React, { useContext } from 'react'
import TodoContext from './contexts/TodoContext'


function Todo({children}) {
  const {toDo, setTodo} = useContext(TodoContext);
  return (
    <div className="Todo">
      <h2>{children}</h2>
        <p>- Faire mon CV :
          <button type="button" onClick={() => setTodo(!toDo)}>{toDo ? "C'est fait" : "Todo"}</button>
        </p>
        <p>- Finir mon portfolio : 
          <button type="button" onClick={() => setTodo(!toDo)}>{toDo ? "C'est fait" : "Todo"}</button>
        </p>
        <p>- Ecrire une lettre de motivation : 
        <button type="button" onClick={() => setTodo(!toDo)}>{toDo ? "C'est fait" : "Todo"}</button>
        </p>
    </div>
  )
}

export default Todo
