import React from 'react';
import './App.css';
import CounterDashboard from "./counter/CounterDashboard";
import TodoDashboard from "./todo/TodoDashboard";

function App() {
    return (
        <div className="App">
            <CounterDashboard/>
            <TodoDashboard/>
        </div>
    );
}

export default App;
