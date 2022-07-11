import { Button, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { React, useState } from 'react';
import TodoForm from './components/TodoForm/index';
import TodoList from './components/TodoList/index';

TodoFeature.propTypes = {};

function TodoFeature(props) {
  const storageList = JSON.parse(localStorage.getItem('saveList'));
  const [todoList, setTodoList] = useState(storageList ?? []);

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
    const jsonTodo = JSON.stringify(newTodoList);
    localStorage.setItem('saveList', jsonTodo);
  };

  const handleClearClick = () => {
    localStorage.removeItem('saveList');
    setTodoList([]);
  };

  const useStyles = makeStyles((theme) => ({
    button: {
      position: 'absolute',
      bottom: '80px',
    },
  }));

  const classes = useStyles();
  return (
    <Container>
      <h3>What to do 😊 </h3>
      <TodoForm onSubmit={handleFormSubmit} />
      <h3>TodoList</h3>
      <TodoList todoList={todoList} onTodoClick={handleClick} />
      <Button className={classes.button} variant="contained" size="large" color="primary" onClick={handleClearClick}>
        Clear All
      </Button>
    </Container>
  );
}

export default TodoFeature;
