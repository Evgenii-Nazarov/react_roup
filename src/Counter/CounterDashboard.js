import React, {useState} from 'react'
import CounterList from "./CounterList/CounterList"
import CounterController from "./Controller/CounterController"

function CounterDashboard() {
    const initialState = [
        {value: 7, id: Math.random(), numberOfButtons: 1},
        {value: 16, id: Math.random(), numberOfButtons: 7},
        {value: 42, id: Math.random(), numberOfButtons: 4}]

    const [counters, setCounters] = useState(initialState)

    const counterMinus = (id, step) => {

        const updatedCounters = counters.map((el) => {

            if (el.id === id) return { ...el, value:  el.value + step}

            return el
        });

        setCounters(updatedCounters)

    }

    const controllerCreate = (numberOfButtons) => {

        const newCounter = {
            value: 1, id: Math.random(), numberOfButtons
        }

        const updatedCounters = [ ...counters, newCounter]
        setCounters(updatedCounters)
    }

    return (
        <div>
            <CounterController controllerCreate={controllerCreate}/>
            <CounterList counters={counters} counterMinus={counterMinus}/>
        </div>
    );
}

export default CounterDashboard
