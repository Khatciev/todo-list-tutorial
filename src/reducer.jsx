export const TodosReducer = (state, action) => {
    if (action.type === "ADD_TODO") {
        return [
            ...state,
            {
                text: action.payload.text,
                completed: action.payload.completed,
            },
        ];
    }
    return state;
};
