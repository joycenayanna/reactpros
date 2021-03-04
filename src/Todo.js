import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";

const Todo = ({text, todo, todos, setTodos}) => {

    const deleteHandler = () => {
        setTodos(todos.filter(el => el.id !== todo.id));
    };
    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id){
                return {
                    ...item, completed: !item.completed
                };
            }
            return item;
        }))
    };
    return(
        <>
            <ol className={todo.completed ? "completed" : ""}>
                {text}
                    <Button onClick={completeHandler}>
                        <i>Complete</i>
                    </Button>
                    <Button onClick={deleteHandler}>
                        <i>Done</i>
                    </Button>
            </ol>
        </>
    );
}
export default Todo;
