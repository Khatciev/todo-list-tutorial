import React, { memo, useReducer, useState } from "react";
import { Button, Divider, List, Paper, Tab, Tabs } from "@mui/material";
import AddField from "./AddField";
import Item from "./Item";
import { TodosReducer } from "./reducer";

const App = () => {
    const [state, dispatch] = useReducer(TodosReducer, [
        { id: 1, text: "helllo", completed: false },
    ]);
    const [todo, setTodo] = useState({ id: "", text: "", completed: false });

    const handleChange = (e) => {
        const target = e.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        setTodo({
            ...todo,
            [name]: value,
        });
    };

    const addTodo = () => {
        if (todo.text !== "") {
            dispatch({ type: "ADD_TODO", payload: { todo: todo } });
            setTodo({ id: "", text: "", completed: false });
        }
    };

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
                    {state.map((el, index) => (
                        <Item key={index} text={el.text} completed={el.completed} />
                    ))}
                </List>
                <Divider />
                <div className="check-buttons">
                    <Button>Отметить всё</Button>
                    <Button>Очистить</Button>
                </div>
            </Paper>
        </div>
    );
};

export default memo(App);
