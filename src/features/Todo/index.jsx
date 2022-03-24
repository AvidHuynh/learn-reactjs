import { React, useState } from "react";
import TodoList from "./components/TodoList/index";

TodoFeature.propTypes = {};

function TodoFeature(props) {
  const initTodoList = [
    {
      id: 1,
      title: "Learning",
      status: "new",
    },
    {
      id: 2,
      title: "Watch Film",
      status: "completed",
    },
    {
      id: 3,
      title: "Relax",
      status: "new",
    },
  ];

  const [todoList, setTodoList] = useState(initTodoList);

  const handleClick = (todo, idx) => {
    const newTodoList = [...todoList];
    newTodoList[idx] = {
      ...newTodoList[idx],
      status: newTodoList[idx].status === "new" ? "completed" : "new",
    };
    setTodoList(newTodoList);
  };
  return (
    <div>
      <h3>TodoList</h3>
      <TodoList todoList={todoList} onTodoClick={handleClick} />
    </div>
  );
}

export default TodoFeature;
