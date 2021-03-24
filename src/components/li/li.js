import React from 'react';

const li = ({todos, name, setTodos, idx, todoObj, setEditedTodo, editedTodo}) => {
    const deleteTodo = () =>{
        setTodos(todos.filter((item) =>{
            return item.id !== todoObj.id
        }))
    }
    const doneHandler = () =>{
    setTodos(todos.map((item) => item.id === todoObj.id ? {...item, isActive: !item.isActive} : item ))
    }
    const importantHandler = () =>{
    setTodos(todos.map((item) => item.id === todoObj.id ? {...item, isImportant: !item.isImportant} : item ))
    }
    const saveEditHandler = (e) =>{
        e.preventDefault();
        setEditedTodo(e.target.children[0].value)
        if(editedTodo !== ''){
            setTodos(todos.map((item) => item.id === todoObj.id ? {...item, todoName: editedTodo} : item ))
        }
        e.target.classList.remove('active')
    }
    const openEditForm = () => {
        Array.from(document.getElementsByClassName('edit-form')).map((el, elIdx) => {
            return idx === elIdx ? el.classList.add('active') : el
        })
        setEditedTodo('')

        }
    return (
        <li className="li">
                <p className={`todo-name ${todoObj.isActive ? '' : 'done'} ${todoObj.isImportant ?  'important' : ''}`}>{name}</p>
                <form className={`edit-form`} onSubmit={saveEditHandler}>   
                <input type="text"  placeholder={name} defaultValue={name} onChange={(e) => setEditedTodo(e.target.value)} required />
                <button className='btns-4 ' type="submit"  ><i class="fas fa-save"></i></button>
                </form>
                <div className="statusbtns">
                    <button type="button" className='btn btns-3 btn-outline-secondary' onClick={openEditForm}><i class="fas fa-user-edit"></i></button>
                    <button className={`btn btns btn-outline-success ${todoObj.isActive ? '' : 'active'}`} type="button" onClick={doneHandler}><i class="fas fa-check"></i></button>
                    <button className={`btn btns-1 btn-outline-warning ${todoObj.isImportant ? 'active' : ''}`} type="button" onClick={importantHandler}><i class="fas fa-star"></i></button>
                    <button className={`btn btns-2 btn-outline-danger`} type="button" onClick={deleteTodo}><i class="fas fa-trash"></i></button>
                </div>
            </li>
    );
};

export default li;