import React from 'react';

function ButtonMinusList(props) {

    const {numberOfButtons, buttonMinusHandler} = props;
    const buttonsArray = [];
    for (let i = 1; i <= numberOfButtons; i++) {
        buttonsArray.push(i);
    }

    return (
        <div>
            {buttonsArray.map(() => {
                return (
                    <span>
                        <button onClick={() => buttonMinusHandler()}>-</button>
                    </span>
                )
            })}
        </div>
    );
}

export default ButtonMinusList;
