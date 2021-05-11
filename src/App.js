import React, {useState, useEffect} from 'react'
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  //States
  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || [])
  const [status, setStatus] = useState('all')
  const [filteredTodos, setFilteredTodos] = useState(todos)
  //Use Effect
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status])
  
  //Functions
  const filterHandler = () => {
    switch (status){
      case 'completed':
        setFilteredTodos(todos.filter(el => el.completed))
        break
      case 'uncompleted':
        setFilteredTodos(todos.filter(el => !el.completed))
        break
      case 'all':
        setFilteredTodos(todos)
    }
  }
  // Save to local storage
  const saveLocalTodos = () =>{
    localStorage.setItem('todos', JSON.stringify(todos))
  }
  return ( 
    <div className = "App" >
      <header>
        <h1>Vladislav's Todo List</h1>
      </header>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        status = {status}
        setStatus = {setStatus}
        />
      <TodoList filteredTodos={filteredTodos} todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;