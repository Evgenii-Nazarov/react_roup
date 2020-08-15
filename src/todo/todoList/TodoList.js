import React from 'react'
import TodoListItem from "./TodoListItem";
import TodoListItemNew from "./TodoListItemNew";

function TodoList(props) {
    const {todoList, todoMarkDone, todoDoAgain, editTodo, todoMarkUnmark, raiseUp} = props;


    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: '300px',
        }}>
            {todoList.map((el, index) => {
                const isElemLast = index === todoList.length - 1;
                return (
                    <div>
                        {/*<TodoListItem todo={el} todoMarkDone={todoMarkDone} todoDoAgain={todoDoAgain} editTodo={editTodo}/>*/}
                        <TodoListItemNew todoMarkUnmark={todoMarkUnmark}
                                         index={index}
                                         isElemLast={isElemLast}
                                         todo={el}
                                         todoMarkDone={todoMarkDone}
                                         todoDoAgain={todoDoAgain}
                                         raiseUp={raiseUp}
                                         editTodo={editTodo}/>
                    </div>
                )
            })}
        </div>
    );
}

export default TodoList
