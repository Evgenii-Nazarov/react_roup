import React from 'react'
import TodoListItem from "./TodoListItem";
import TodoListItemNew from "./TodoListItemNew";

function TodoList(props) {
    const {todoList, todoMarkDone, todoDoAgain, editTodo, todoMarkUnmark} = props;


    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: '300px',
        }}>
            {todoList.map((el) => {
                return (
                    <div>
                    {/*<TodoListItem todo={el} todoMarkDone={todoMarkDone} todoDoAgain={todoDoAgain} editTodo={editTodo}/>*/}
                    <TodoListItemNew todoMarkUnmark={todoMarkUnmark} todo={el} todoMarkDone={todoMarkDone} todoDoAgain={todoDoAgain} editTodo={editTodo}/>
                    </div>
                )
            })}
        </div>
    );
}

export default TodoList
