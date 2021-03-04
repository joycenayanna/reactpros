import React from "react";
import Todo from "./Todo";

const TodoList = ({todos, setTodos, filteredTodos}) => {

    return(
        <div >
            <p>
                <ul>
                    {filteredTodos.map(todo => (
                        <Todo setTodos={setTodos} todos={todos} key={todo.id} todo={todo} text={todo.text}/>
                    ))}
                </ul>
            </p>

        </div>
    );
}
export default TodoList;
