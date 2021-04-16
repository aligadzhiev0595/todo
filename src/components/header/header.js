import React from 'react';

const header = ({todos, setTodos}) => {
    const more = () => {
       return todos.filter((item) => item.isActive).length
    }
    const done = () => {
        return todos.filter((item) => !item.isActive).length
    }
    return (
        <header>
        <h1 className="title">ToDoList</h1>
    {  
     todos ? todos.length === 0 ? '' : <p className="statusBar">{more()} more to do, {done()} done </p> : setTodos([])
    }
    </header>
    );
};

export default header;