import React, { memo } from "react";
import { Button, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const AddField = ({ todo, addTodo, handleChange }) => {
    return (
        <div className="field">
            <input
                name="completed"
                type="checkbox"
                checked={todo.completed}
                onChange={handleChange}
            />
            <TextField
                name="text"
                value={todo.text}
                onChange={handleChange}
                placeholder="Введите текст задачи..."
                variant="standard"
                fullWidth
            />
            <Button onClick={addTodo}>
                <AddIcon />
            </Button>
        </div>
    );
};

export default memo(AddField);
