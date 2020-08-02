import React from 'react';
import CounterListItem from "./CounterListItem";

function CounterList(props) {
    const {counters, counterMinus} = props;

    return (
        <div>
            {counters.map((el) =>
                <CounterListItem counter={el} counterMinus={counterMinus}/>
            )}

        </div>
    );
}

export default CounterList;
