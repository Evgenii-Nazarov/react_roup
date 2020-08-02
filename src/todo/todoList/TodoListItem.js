import React, {useState} from 'react'

function TodoListItem(props) {
    const {todo, todoMarkDone, todoDoAgain, editTodo} = props;
    const todoId = todo.id
    const todoText = todo.todo
    const isTodoDone = todo.isDone

    const [isEditMode, setIsEditMode] = useState(false);
    const [todoEdition, setTodoEdition] = useState(todoText);
    // const [todoInputValue, setTodoInputValue] = useState(todoText);

    const style = isTodoDone === true ? {'textDecoration': "line-through"} : null;

    const markAsDoneButtonHandler = () => {
        todoMarkDone(todoId);
    }

    const doAgainDoneButtonHandler = () => {
        todoDoAgain(todoId);
    }

    const editButtonHandler = () => {
        setIsEditMode(true);
    }

    const editInputHandler = (e) => {
        setTodoEdition(e.target.value);
    }

    const updateButtonHandler = () => {
        editTodo(todoId, todoEdition)
        setIsEditMode(false);
    }

    return (

        <div>

            {isEditMode && (<div>
                <input type="text" value={todoEdition} onChange={editInputHandler}/>
                <button onClick={updateButtonHandler}>update</button>
            </div>)}

            {isTodoDone ? (
                    <div>
                        <div>
                            <li style={style}>{todoText}</li>
                            <button onClick={doAgainDoneButtonHandler}>do again</button>
                            <button onClick={editButtonHandler}>edit</button>
                        </div>
                    </div>
                ) :
                (
                    <div>
                        <div>
                            <li style={style}>{todoText}</li>
                            <button onClick={markAsDoneButtonHandler}>mark as done</button>
                            <button onClick={editButtonHandler}>edit</button>
                        </div>
                    </div>
                )}
        </div>
    );
}

export default TodoListItem
