import React, {useState} from 'react'
import TodoList from "./todoList/TodoList";

function TodoDashboard() {
    const initialState = [
        {todo: 'Eat', id: Math.random(), isDone: false},
        {todo: 'Sleep', id: Math.random(), isDone: true},
        {todo: 'Repeat', id: Math.random(), isDone: false}]

    const [todoList, setTodoList] = useState(initialState)

    // const toDoCreate = (newTodo) => {
    //
    //     const newTodoList = {
    //         id: Math.random(), todo: newTodo, isDone: false
    //     }
    //
    //     const updatedTodoList = [...todoList, newTodoList]
    //     setTodoList(updatedTodoList)
    // }

    const todoMarkDone = (todoId) => {
        const updatedTodoList = [...todoList].map((el) => {

            if (el.id === todoId) return {...el, isDone: true}

            return el
        })

        setTodoList(updatedTodoList)
    }

    const todoDoAgain = (todoId) => {
        const updatedTodoList = [...todoList].map((el) => {

            if (el.id === todoId) return {...el, isDone: false}

            return el
        })

        setTodoList(updatedTodoList)
    }

    const editTodo = (todoId, newTodo) => {
        const updatedTodoList = [...todoList].map((el) => {

            if (el.id === todoId) return {...el, todo: newTodo}

            return el
        })

        setTodoList(updatedTodoList)
    }


    return (
        <div>
            <TodoList todoList={todoList} todoMarkDone={todoMarkDone} todoDoAgain={todoDoAgain} editTodo={editTodo}/>
        </div>
    );
}

export default TodoDashboard
