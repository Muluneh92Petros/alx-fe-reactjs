import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from './TodoList'; // Adjust the import based on your file structure

test('renders Todo List heading', () => {
    render(<TodoList />);
    const heading = screen.getByText(/Todo List/i);
    expect(heading).toBeInTheDocument();
});

test('can add a new todo', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText(/Add a new todo/i);
    const button = screen.getByText(/Add Todo/i);

    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(button);

    expect(screen.getByText(/New Todo/i)).toBeInTheDocument();
});

test('can delete a todo', () => {
    render(<TodoList />);
    const deleteButton = screen.getAllByText(/Delete/i)[0];

    fireEvent.click(deleteButton);

    expect(screen.queryByText(/Learn React/i)).not.toBeInTheDocument();
});