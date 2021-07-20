import {
  ADD_TODO,
  TOGGLE_TODO,
  REMUVE_BUTTON,
  TOGGLE_ALL_TODO,
  TOGGLE_FILTER,
  CLEAR_COMPLETED,
} from "./const";

export const addTodo = (title) => ({
  type: ADD_TODO,
  payload: title,
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: id,
});

export const toggleAllTodo = () => ({
  type: TOGGLE_ALL_TODO,
});

export const remuveButton = (id) => ({
  type: REMUVE_BUTTON,
  payload: id,
});

export const toggleFilter = (id) => ({
  type: TOGGLE_FILTER,
  payload: id,
});

export const clearCompleted = () => ({
  type: CLEAR_COMPLETED,
});
