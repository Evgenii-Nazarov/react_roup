import React, {useState, useEffect} from 'react'
import axios from 'axios';
import TodoList from "./todoList/TodoList";

function TodoDashboard() {

    const [todoList, setTodoList] = useState([])


    useEffect(() => {
        axios.get('http://localhost:5000/todo')
            .then((res) => {
                    console.log('RESS')
                    console.log('rerewferw', res)
                    setTodoList(res.data)
                    return res
                }
            )
            .catch((err) => {
                    console.log('ERROR')
                    return err
                }
            )
    }, []);

    // const toDoCreate = (newTodo) => {
    //
    //     const newTodoList = {
    //         id: Math.random(), todo: newTodo, isDone: false
    //     }
    //
    //     const updatedTodoList = [...todoList, newTodoList]
    //     setTodoList(updatedTodoList)
    // }

    const raiseUp = (currentElementIndex, previousElementIndex) => {
        if (previousElementIndex < 0 || previousElementIndex >= todoList.length) return

        const updatedTodoList = todoList.map((el, index) => {
            if (index === currentElementIndex) return todoList[previousElementIndex]
            if (index === previousElementIndex) return todoList[currentElementIndex]
            return el
        })

        setTodoList(updatedTodoList)
    }

    const todoMarkUnmark = (todoId) => {
        const updatedTodoList = [...todoList].map((el) => {

            if (el._id === todoId) return {...el, done: !(el.done)}

            return el
        })

        setTodoList(updatedTodoList)
    }

    const todoMarkDone = (todoId) => {
        const updatedTodoList = [...todoList].map((el) => {

            if (el._id === todoId) return {...el, done: true}

            return el
        })

        setTodoList(updatedTodoList)
    }

    const todoDoAgain = (todoId) => {
        const updatedTodoList = [...todoList].map((el) => {

            if (el._id === todoId) return {...el, done: false}

            return el
        })

        setTodoList(updatedTodoList)
    }

    const editTodo =  (todoId, newTodo) => {

         axios.patch(`http://localhost:5000/todo/${todoId}`, {name: newTodo})
            .then((res) => {
                }
            )
            .catch((err) => {
                    console.log('ERROR')
                    console.log('err', err)
                }
            )

        axios.get('http://localhost:5000/todo')
            .then((res) => {
                    console.log('RESS')
                    console.log('rerewferw', res)
                    setTodoList(res.data)
                    return res
                }
            )
            .catch((err) => {
                    console.log('ERROR')
                    return err
                }
            )


        // const updatedTodoList = [...todoList].map((el) => {
        //
        //     if (el._id === todoId) return {...el, name: newTodo}
        //
        //     return el
        // })
        //
        // setTodoList(updatedTodoList)
    }


    return (
        <div>
            <TodoList todoList={todoList}
                      todoMarkDone={todoMarkDone}
                      todoDoAgain={todoDoAgain}
                      todoMarkUnmark={todoMarkUnmark}
                      raiseUp={raiseUp}
                      editTodo={editTodo}/>
        </div>
    );
}

export default TodoDashboard
