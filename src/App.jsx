import React from 'react'
import './App.css';
import TodoContext from './components/contexts/TodoContext';
import TodoStage from './components/TodoStage'
import TodoEmploi from './components/TodoEmploi'

function App() {
  const [toDo, setTodo] = React.useState(false)
  return (
    <div className="App">
        <h1>Todo list pour :</h1>
        <TodoContext.Provider value={{toDo: toDo, setTodo: setTodo}}>
          <TodoStage type="stage"> -> La recherche de stage</TodoStage>
          <TodoEmploi type="emploi"> -> La recherche d'emploi</TodoEmploi>
        </TodoContext.Provider>
    </div>
  );
}

export default App;
