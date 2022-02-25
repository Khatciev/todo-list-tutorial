import React, { memo, useReducer, useState } from "react";
import { Button, Divider, List, Paper, Tab, Tabs } from "@mui/material";
import AddField from "./AddField";
import Item from "./Item";
import { TodosReducer } from "./reducer";

const App = () => {
  const [state, dispatch] = useReducer(TodosReducer, [
    { id: 1, text: "hello", completed: false },
  ]);
  const [todo, setTodo] = useState({ id: 0, text: "", completed: false });

  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    const name = e.target.name;
    setTodo({
      ...todo,
      [name]: value,
    });
  };

  const addTodo = () => {
    if (todo.text.trim()) {
      dispatch({ type: "ADD_TODO", payload: todo });
      setTodo({ id: 0, text: "", completed: false });
    }
  };

  const removeTodo = (id) => {
    if (window.confirm("Удалить этот дело?")) {
      dispatch({ type: "REMOVE_TODO", payload: id });
    }
  };
  const clearAll = () => {
    dispatch({ type: "CLEAR_TODOS", payload: {id: "", text: "", completed: ""} });
    console.log(state);
  };
const onClickCompleted = () => {
  dispatch({ type: "COMPLETED_TODOS"});
}
  return (
    <div>
      <Paper className="wrapper">
        <Paper className="header" elevation={0}>
          <h4>Список задач</h4>
        </Paper>
        <AddField handleChange={handleChange} addTodo={addTodo} todo={todo} />
        <Divider />
        <Tabs value={0}>
          <Tab label="Все" />
          <Tab label="Активные" />
          <Tab label="Завершённые" />
        </Tabs>
        <Divider />
        <List>
          {state?.map((el) => (
            <Item
              key={el?.id}
              id={el?.id}
              text={el?.text}
              removeTodo={removeTodo}
              completed={el?.completed}
            />
          ))}
        </List>
        <Divider />
        <div className="check-buttons">
          <Button onClick={onClickCompleted}>Отметить всё</Button>
          <Button onClick={clearAll}>Очистить</Button>
        </div>
      </Paper>
    </div>
  );
};

export default memo(App);
