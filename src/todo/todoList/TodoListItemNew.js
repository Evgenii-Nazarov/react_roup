import React, {useState} from 'react'
import {Button} from "reactstrap";

function TodoListItemNew(props) {
    const {todo, todoMarkDone, editTodo, todoMarkUnmark, index, isElemLast, raiseUp} = props;
    const todoId = todo._id
    const todoText = todo.name
    const isTodoDone = todo.done

    const [isEditMode, setIsEditMode] = useState(false);
    const [todoEdition, setTodoEdition] = useState(todoText);
    // const [todoInputValue, setTodoInputValue] = useState(todoText);

    const style = isTodoDone === true ? {
        'textDecoration': "line-through",
        listStyleType: 'none'
    } : {listStyleType: 'none'};

    const doAgainDoneButtonHandler = () => {
        todoMarkUnmark(todoId);
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

    const raiseUpButtonHandler = () => {
        raiseUp(index, index - 1)
    }

    return (

        <div>

            {isEditMode ? (
                <div style={{display: 'flex', flexDirection: 'row', padding: '10px'}}>
                    <input type="text" value={todoEdition} onChange={editInputHandler}/>
                    <button onClick={updateButtonHandler}>update</button>
                    <button onClick={() => setIsEditMode(false)}>cancel</button>

                </div>) : (
                <>
                    {(
                            <div style={{display: 'flex', flexDirection: 'row', padding: '10px'}}>
                                <li style={style}>{todoText}</li>
                                <input type="checkbox" checked={isTodoDone} onClick={doAgainDoneButtonHandler}/>
                                <Button color='success' size='lg' onClick={doAgainDoneButtonHandler}>change</Button>
                                <button onClick={editButtonHandler}>edit</button>
                                <button disabled={!index} onClick={raiseUpButtonHandler}>↑</button>
                                <button disabled={isElemLast} onClick={() => {raiseUp(index, index + 1)}}>↓</button>
                            </div>
                        ) }
                </>
            )}


        </div>
    );
}

export default TodoListItemNew
