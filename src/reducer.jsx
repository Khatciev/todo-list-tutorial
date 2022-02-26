export const TodosReducer = (state = [], action) => {
  if (action.type === "ADD_TODO") {
    console.log(state);
    return [
      ...state,
      {
        id: state[state.length - 1].id + 1,
        text: action.payload.text,
        completed: action.payload.completed,
      },
    ];
  }
  if (action.type === "REMOVE_TODO") {
    console.log(state);
    return state.filter((el) => el.id !== action.payload);
  }
  if (action.type === "COMPLETED_TODOS") {
    return state.map((item) => ({
      ...item,
      completed: true,
    }));
  }
  if (action.type === "CLEAR_TODOS") {
    return [];
  }

  return state;
};
