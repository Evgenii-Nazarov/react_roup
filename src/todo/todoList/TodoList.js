import React from 'react'
import TodoListItem from "./TodoListItem";

function TodoList(props) {
    const {todoList, todoMarkDone, todoDoAgain, editTodo} = props;


    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: '300px',
        }}>
            {todoList.map((el) => {
                return (
                    <TodoListItem todo={el} todoMarkDone={todoMarkDone} todoDoAgain={todoDoAgain} editTodo={editTodo}/>
                )
            })}
        </div>
    );
}

export default TodoList
