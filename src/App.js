import React, {useState, useEffect} from "react";
import './App.css';
import Form from "./Form";
import TodoList from "./TodoList";
// import Datastore from 'nedb';

// const db = new Datastore('database.db'),
// db.loadDatabase();
const Datastore = require("nedb"),
database = new Datastore({ filename: "./database.db", autoload: true });

function App() {

    const [inputText, setInputText] = useState('');
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState("all");
    const [filteredTodos, setFilteredTodos] = useState([]);

    useEffect(() => {
        filterHandler();
    }, [todos, status]);

    const filterHandler = () => {
      switch (status){
          case 'completed' :
              setFilteredTodos(todos.filter(todo => todo.completed === true));
              break;
          case 'uncompleted' :
              setFilteredTodos(todos.filter(todo => todo.completed === false));
              break;
          default:
              setFilteredTodos(todos);
              break;
      }
    };
    return (
        <div className="App">
            <header className="App-header">

                <p>
                    ReactPros TODO List App
                </p>
                <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} setStatus={setStatus}/>
                <TodoList filteredTodos={filteredTodos} setTodos={setTodos} todos={todos}/>
            </header>
        </div>
    );
}

export default App;
