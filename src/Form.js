import React, {useState, useEffect, useRef} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";
// import Datastore from 'nedb';
// const Datastore = require('nedb');

// const db = new Datastore('database.db');
// db.loadDatabase();
// db.insert({ todo: "testing"});
// console.log("efhiewhfieh");

const Form = ({setInputText, todos, setTodos, inputText, setStatus}) => {

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus()
    });

    const inputTextHandler = (event) => {
        setInputText(event.target.value);
    };
    const submitTodoHandler = (event) => {
        event.preventDefault();
        setTodos([
            ...todos, {text: inputText, completed: false, id: Math.random() * 1000},
        ]);

        setInputText("");
    };

    const statusHandler = (event) => {
        setStatus(event.target.value);
    };
    return(
        <form>
            <input value={inputText} onChange={inputTextHandler} ref={inputRef}/>
            <Button onClick={submitTodoHandler}>Add ToDo</Button>
            <div className="select">
                Show :
                <select onChange={statusHandler}>
                    <option value="all">All</option>
                    <option value="completed"> Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
}
export default Form;
