import React from 'react'

const Todo = ({todo, todos, setTodos}) =>{
    const deleteHandler = () => {
        setTodos(todos.filter(el =>(el.id !== todo.id)))
    }
    const completeHandler = () =>{
        setTodos(todos.map((item) =>{
            return item.id == todo.id 
            ? {...item, completed:!item.completed}
            : item;
        }))
    }
    return(
        <div className="todo">
            <li className="todo-item">{todo.text}</li>
            <button onClick={completeHandler} className="complete-btn">
                <i className="fa fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fa fa-trash"></i>
            </button>
        </div>
    );
}

export default Todo