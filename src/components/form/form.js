import React from 'react';

const form = ({setTodos, todos, setInputText, inputText}) => {
    const formHander = (e) =>{
        e.preventDefault();
        setTodos([...todos, {
            todoName: inputText,
            isActive: true,
            isImportant: false,
            id: Math.round(Math.random() * 1000)
        }])
        setInputText('')
    };
    return (
        <form className="form" action="" onSubmit={formHander}>
        <input className="search add" type="text" placeholder="What needs to be done" value={inputText} required onChange={(e) => {
            setInputText(e.target.value)
        }}/>
        <button className="btn btns" type="submit">Add ToDo</button>
    </form>
    );
};

export default form;