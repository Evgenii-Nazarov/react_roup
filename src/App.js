import React from 'react';
import './App.css';
import CounterDashboard from "./counter/CounterDashboard";
import TodoDashboard from "./todo/TodoDashboard";
import Container from "reactstrap/es/Container";

function App() {
    return (
        // <Container>

        <div className="App">
            {/*<CounterDashboard/>*/}
            <TodoDashboard/>
        </div>
        // </Container>
    );
}

export default App;
