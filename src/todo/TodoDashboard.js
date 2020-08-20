import React, {useState, useEffect} from 'react'
import axios from 'axios';
import TodoList from "./todoList/TodoList";
import Controller from "./controller/Controller";

function TodoDashboard() {

    const [todoList, setTodoList] = useState([])


    useEffect(() => {

        const response = axios.get('https://reqres.in/api/users?page=2')
            .then((result) => {
                return result
            })
        console.log('Response: ', response)


        axios.get('http://localhost:5000/todo')
            .then((res) => {
                    console.log('RESS')
                    console.log('rerewferw', res)
                    setTodoList(res.data)
                    return res
                }
            )
            .catch((err) => {
                    // console.log('ERROR')
                    return err
                }
            )
    }, []);

    const addTodo = async (newTodo) => {

        await axios.post(`http://localhost:5000/todo`, {name: newTodo})
            .then((res) => res
            )
            .catch((err) => err
            )

        await axios.get('http://localhost:5000/todo')
            .then((res) => {
                    setTodoList(res.data)
                }
            )
            .catch((err) => err
            )
    }

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

    const editTodo = (todoId, newTodo) => {

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
    }


    return (
        <div>

            <Controller addTodo={addTodo}/>

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
