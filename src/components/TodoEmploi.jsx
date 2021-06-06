import React, { useContext } from 'react';
import TodoContext from './contexts/TodoContext';

function TodoEmploi({children, type}) {
  const {toDo, setTodo} = useContext(TodoContext);
  return (
    <div className="Todo">
      <h2>{children}</h2>
      <p>- Chercher les entreprises qui m'interessent :
        <button type="button" onClick={() => setTodo(!toDo)}>{toDo ? "C'est fait" : "Todo"}</button>
      </p>
      <p>- Mettre à jour mon portfolio : 
        <button type="button" onClick={() => setTodo(!toDo)}>{toDo ? "C'est fait" : "Todo"}</button>
      </p>
    </div>
  )
}

export default TodoEmploi;
