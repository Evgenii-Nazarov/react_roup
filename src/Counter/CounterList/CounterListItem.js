import React from 'react';
import ButtonMinusList from "./ButtonMinusList";
import ButtonPlusList from "./ButtonPlusList";

function CounterListItem(props) {

    const {counter, counterMinus} = props;
    const counterValue = counter.value;
    const counterId = counter.id;
    const numberOfButtons = counter.numberOfButtons;

    const stepMinus = -1;
    const stepPlus = 1;

    const buttonMinusHandler = () => {

        counterMinus(counterId, stepMinus);
    }

    const buttonPlusHandler = () => {
        counterMinus(counterId, stepPlus);
    }

    return (
        <div>
            <ButtonMinusList numberOfButtons={numberOfButtons} buttonMinusHandler={buttonMinusHandler}/>

            {counterValue}

            <ButtonPlusList numberOfButtons={numberOfButtons} buttonPlusHandler={buttonPlusHandler}/>
        </div>
    );
}

export default CounterListItem;
