import React from 'react';

function ButtonPlusList(props) {

    const {numberOfButtons, buttonPlusHandler} = props;
    const buttonsArray = [];
    for (let i = 1; i <= numberOfButtons; i++) {
        buttonsArray.push(i);
    }

    return (
        <div>
            {buttonsArray.map(() => {
                return (
                    <span>
                        <button onClick={() => buttonPlusHandler()}>+</button>
                    </span>
                )
            })}
        </div>
    );
}

export default ButtonPlusList;
