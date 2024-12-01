import React, { useState } from 'react';
<<<<<<< HEAD
import React from 'react';
import TodoList from './TodoList';
=======
>>>>>>> 42ca6dee0c3332416645acafb91f55c604b35618

const TodoList = () => {
    const [todos, setTodos] = useState([
        { id: 1, text: 'Learn React', completed: false },
        { id: 2, text: 'Build a Todo App', completed: false },
    ]);
    const [newTodo, setNewTodo] = useState('');

<<<<<<< HEAD
    const App = () => {
        return (
            <div className="App">
                <TodoList />
            </div>
        );
    };

=======
>>>>>>> 42ca6dee0c3332416645acafb91f55c604b35618
    const addTodo = (e) => {
        e.preventDefault();
        if (!newTodo) return;
        const newTodoItem = { id: Date.now(), text: newTodo, completed: false };
        setTodos([...todos, newTodoItem]);
        setNewTodo('');
    };

    const toggleTodo = (id) => {
        setTodos(todos.map(todo => 
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div>
            <h1>Todo List</h1>
            <form onSubmit={addTodo}>
                <input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="Add a new todo"
                />
                <button type="submit">Add Todo</button>
            </form>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id} onClick={() => toggleTodo(todo.id)} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                        {todo.text}
                        <button onClick={(e) => { e.stopPropagation(); deleteTodo(todo.id); }}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

<<<<<<< HEAD
export default TodoList;
=======
export default TodoList;
>>>>>>> 42ca6dee0c3332416645acafb91f55c604b35618
