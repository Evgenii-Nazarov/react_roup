import React, {useState} from 'react';

function CounterController(props) {
    const {controllerCreate} = props;

    const [inputValue, setInputValue] = useState(0);

    const inputHandler = (e) => {
        const newInputValue = e.target.value;
        setInputValue(newInputValue);
    }

    const buttonHandler = () => {
        controllerCreate(inputValue);
    }

    return (
        <div>
            <input onChange={inputHandler}/>
            <button onClick={buttonHandler}>create</button>
        </div>
    );
}

export default CounterController;
