import React, {useState} from 'react'
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState([])
  return ( 
    <div className = "App" >
      <header>
        <h1>Vladislav's Todo List</h1>
      </header>
      <Form inputText={inputText} todos={todos} setInputText={setInputText} setTodos={setTodos}/>
      <TodoList />
    </div>
  );
}

export default App;