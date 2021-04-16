import React, { useState, useEffect } from 'react';
import Form from '../form';
import Header from '../header';
import Search from '../nav';
import Ul from '../ul';
import './app.css';
import "../../libs/fontawesome/css/all.min.css";


const App = () =>{
    const [todos, setTodos] = useState([]);
    const [inputText, setInputText] = useState('');
    const [status, setStatus] = useState('all');
    const [searchInput, setSearchInput] = useState('');
    const [editedTodo, setEditedTodo] = useState('');
    useEffect(() => {
      setTodos(JSON.parse(localStorage.getItem('todo')));
    }, [])
    useEffect(() => {
      localStorage.setItem('todo', JSON.stringify(todos))
    }, [todos])
    return (
        <div className='app'>
    <div className="app-container"> 
       <Header todos={todos}/>
      <Search status={status} setStatus={setStatus} setSearchInput={setSearchInput} />
    {todos ? todos.length === 0 ? 
    <div className='mb-3 mt-3 border p-3 text-center'>Здесь будет ваше расписание</div> : 
    <Ul todos={todos} setTodos={setTodos} status={status} searchInput={searchInput} editedTodo={editedTodo} setEditedTodo={setEditedTodo}  />
   : setTodos([]) }     
  <Form setTodos={setTodos} todos={todos} setInputText={setInputText} inputText={inputText}/>
    </div>
        </div>
    );
};

export default App