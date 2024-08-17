import React from 'react';

import Header from './components/Header';
import TodoItem from './components/TodoItem';
import Button from './components/Button';

import './style.css';

const App = () => {
  return (
    <div className='todo-container'>
      <Header title='Todo App' />
      <TodoItem text='So' />
      <TodoItem completed={true} text='You' />
      <TodoItem text='Are' />
      <TodoItem text='Very' />
      <TodoItem text='Hot baby' />
      <Button />
    </div>
  );
};

export default App;
