import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  test('renders correctly', () => {
    render(<TodoList />);
    expect(screen.getByText(/Todo List/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Add a new todo/i)).toBeInTheDocument();
  });

  test('adds a new todo', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText(/Add a new todo/i);
    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(screen.getByRole('button', { name: /Add Todo/i }));

    expect(screen.getByText(/New Todo/i)).toBeInTheDocument();
  });

  test('toggles a todo', () => {
    render(<TodoList />);
    const todo = screen.getByText(/Learn React/i);
    fireEvent.click(todo);

    expect(todo).toHaveStyle('text-decoration: line-through');
  });

  test('deletes a todo', () => {
    render(<TodoList />);
    const deleteButton = screen.getByText(/Delete/i);
    fireEvent.click(deleteButton);

    expect(screen.queryByText(/Learn React/i)).not.toBeInTheDocument();
  });
});