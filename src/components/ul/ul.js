import React from 'react';
import Li from '../li';

const ul = ({todos, setTodos, status, searchInput, editedTodo, setEditedTodo}) => {
    return (
        <ul className="ul">
            {todos ? todos.length === 0 ? '' :
            todos.filter((item) => {
                switch (status) {
                        case 'active':{
                            return item.isActive;
                        }
                       
                            case 'done':{
                                return !item.isActive;
                            }
                      
                                default:
                                    return item;
                }
            }).filter((item) => {
                return item.todoName.includes(searchInput)
            })
            .map((item, idx) =>{
                return  <Li
                idx={idx}
                 setTodos={setTodos}
                  name={item.todoName}
                  todos={todos}
                   key={item.id}
                    todoObj={item}
                    editedTodo={editedTodo}
                    setEditedTodo={setEditedTodo}
                   />
            }) : setTodos([])
        }
        </ul>
    );
};

export default ul;