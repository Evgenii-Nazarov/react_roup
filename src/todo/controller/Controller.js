import React, {useState} from 'react'

function Controller(props) {

const [newTodo, setNewTodo] = useState('');

    return (
        <div>
            <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)}/>
            <button onClick={() => props.addTodo(newTodo)}>add new todo</button>
        </div>
    );
}

export default Controller
