import "./App.scss";
import React, { useEffect, useState } from "react";
import ColorBox from "./features/ColorBox/index";
import TodoList from "./features/TodoList/index";
import TodoForm from "./features/TodoForm/index";
import PostList from "./features/PostList/index";
import Pagination from "./features/Pagination/index";
import queryString from "query-string";
import PostFilterForm from "./features/SearchTerm/index";
import F8TodoList from './features/F8TodoList/index';

function App() {
  // STATE
  const [todoList, setTodoList] = useState([
    { id: 1, title: "I love Easy Frontend! 😍 " },
    { id: 2, title: "We love Easy Frontend! 🥰 " },
    { id: 3, title: "They love Easy Frontend! 🚀 " },
  ]);
  const [postList, setPostList] = useState([]);
  const [pagination, setPagination] = useState({
    _limit: 10,
    _page: 1,
    _totalRows: 50,
  });
  const [filter, setFilter] = useState({
    _limit: 10,
    _page: 1,
    title_like: '',
  });

  // FUNCTION HANDLE CLICK
  function handleTodoClick(todo) {
    const index = todoList.findIndex((x) => x.id === todo.id);
    if (index < 0) return;
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }

  function handleFormSubmit(formValue) {
    const newTodo = {
      id: todoList.length + 1,
      ...formValue,
    };
    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  }

  function hanldePageChange(newPage) {
    setFilter({
      ...filter,
      _page: newPage,
    });
  }

  function handleFormSearch(newFilter) {
    setFilter({
      ...filter,
      _page: 1,
      title_like: newFilter.searchTerm,
    });
  }

  // UseEffect HOOK
  useEffect(() => {
    async function fetchPostList() {
      try {
        const paramString = queryString.stringify(filter);
        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramString}`;
        const respone = await fetch(requestUrl);
        const responeJson = await respone.json();
        const { data, pagination } = responeJson;
        setPostList(data);
        setPagination(pagination);
      } catch (error) {
        console.log("Error render post:", error);
      }
    }
    fetchPostList();
  }, [filter]);

  return (
    <div className="App">
      <p>LAB 01: COLOR BOX</p>
      <ColorBox />

      <p>LAB 02: TODO LIST</p>
      <TodoList todos={todoList} onTodoClick={handleTodoClick} />
      <TodoForm onSubmit={handleFormSubmit} />

      <p>LAB 03: POST_LIST</p>
      <PostFilterForm onSubmit={handleFormSearch} />
      <PostList posts={postList} />
      <Pagination pagination={pagination} onChangePage={hanldePageChange} />

      <p>LAB 04: F8 TodoList</p>
      <F8TodoList/>

    </div>
  );
}

export default App;
