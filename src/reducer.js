
export const TodosReducer = (state, action) => {
    if (action.type === "ADD_TODO") {
        return [
            ...state,
            {
                text: action.payload.todo.text,
                completed: action.payload.todo.completed,
            },
        ];
    }
    return state;
};
