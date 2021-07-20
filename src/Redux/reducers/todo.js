import {
  ADD_TODO,
  TOGGLE_TODO,
  REMUVE_BUTTON,
  TOGGLE_ALL_TODO,
  TOGGLE_FILTER,
  CLEAR_COMPLETED,
} from "../const";

const initialState = {
  arr: [
    { id: 1, completed: false, title: "купить хлеб" },
    { id: 2, completed: false, title: "купить молоко" },
    { id: 3, completed: false, title: "купить масло" },
  ],
  filter: "all",
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const title = action.payload;

      return {
        ...state,
        arr: state.arr.concat({
          id: Date.now(),
          completed: false,
          title: title,
        }),
      };

    case TOGGLE_TODO:
      let id = action.payload;
      let newItems = state.arr.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      );
      return {
        ...state,
        arr: newItems,
      };

    case TOGGLE_ALL_TODO:
      let arrCompleted = state.arr.filter((item) => item.completed);
      console.log("fil", arrCompleted);
      let todoAllComplete = state.arr.map((todo) =>
        state.arr.length === arrCompleted.length
          ? { ...todo, completed: (todo.completed = false) }
          : { ...todo, completed: (todo.completed = true) }
      );

      return {
        ...state,
        arr: todoAllComplete,
      };

    case REMUVE_BUTTON:
      const removeId = action.payload;
      const arr = state.arr.filter((item) => item.id !== removeId);

      return {
        ...state,
        arr: arr,
      };

    case TOGGLE_FILTER:
      const filterId = action.payload;

      return {
        ...state,
        filter: filterId,
      };

    case CLEAR_COMPLETED:
      let arrClear = state.arr.filter((item) => !item.completed);
      console.log("arr", arrClear);
      return {
        ...state,
        arr: arrClear,
      };

    default:
      return state;
  }
};

export default todos;
