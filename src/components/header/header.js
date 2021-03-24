import React from 'react';

const header = ({todos}) => {
    const more = () => {
       return todos.filter((item) => item.isActive).length
    }
    const done = () => {
        return todos.filter((item) => !item.isActive).length
    }
    return (
        <header>
        <h1 className="title">ToDoList</h1>
    {todos.length === 0 ? '' : <div className="statusBar">
        {more()} more to do, {done()} done
    </div>}
    </header>
    );
};

export default header;