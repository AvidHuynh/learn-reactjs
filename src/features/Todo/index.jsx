import { Container } from '@material-ui/core';
import { React, useState } from 'react';
import TodoForm from './components/TodoForm/index';
import TodoList from './components/TodoList/index';

TodoFeature.propTypes = {};

function TodoFeature(props) {
  const initTodoList = [
    {
      id: 1,
      title: 'Learning',
      status: 'new',
    },
    {
      id: 2,
      title: 'Watch Film',
      status: 'completed',
    },
    {
      id: 3,
      title: 'Relax',
      status: 'new',
    },
  ];

  const [todoList, setTodoList] = useState(initTodoList);

  const handleClick = (todo, idx) => {
    const newTodoList = [...todoList];
    newTodoList[idx] = {
      ...newTodoList[idx],
      status: newTodoList[idx].status === 'new' ? 'completed' : 'new',
    };
    setTodoList(newTodoList);
  };

  const handleFormSubmit = (values) => {
    console.log('Form values:', values);
    const newTodo = {
      id: todoList.length + 1,
      title: values.title,
      status: 'new',
    };
    const newTodoList = [...todoList, newTodo];
    setTodoList(newTodoList);
  };

  return (
    <Container>
      <h3>What to do 😊 </h3>
      <TodoForm onSubmit={handleFormSubmit} />
      <h3>TodoList</h3>
      <TodoList todoList={todoList} onTodoClick={handleClick} />
    </Container>
  );
}

export default TodoFeature;
