import React, { useState } from "react";

const Todo = () => {
    const [inputValue, setInputValue] = useState("");
    const [todos, setTodos] = useState([]); 

    const handleKeyPress = (event) => {
        if (event.key === "Enter" && inputValue.trim()) {
            setTodos(prevTodos => [...prevTodos, inputValue]); 
            setInputValue('');
        }
    };

    const removeTodo = (todoIndex) => {
        setTodos(prevTodos => prevTodos.filter((_, index) => index !== todoIndex)); 
    };

    return (
        <div style={{ maxWidth: "500px", margin: "auto" }}>
            <div className="todo-input">
                <input 
                    type="text" 
                    value={inputValue} 
                    onKeyDown={handleKeyPress} 
                    onChange={(e) => setInputValue(e.target.value)} 
                    placeholder={inputValue === "" ? "Escribe tu tarea aquí" : inputValue} 
                />
            </div>
            <ul className="todo-list">
                {todos.map((item, index) => ( 
                    <li className="todo-item" key={index} style={{ display: 'flex', justifyContent: 'space-between' }}>
                        {item}
                        <button className="btn btn-sm remove-button" onClick={() => removeTodo(index)}>x</button>
                    </li>
                ))}
                <li className="todo-count" style={{ color: "gray" }}>
                    {todos.length} items left
                </li>
            </ul>
        </div>
    );
};

export default Todo;