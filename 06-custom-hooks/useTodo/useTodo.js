import { useReducer, useEffect } from "react";
import { todoReducer } from "../todoReducer";

const initialState = [
  // {
  //   id: new Date().getTime(),
  //   description: "Recolectar la piedra del Alma",
  //   done: false,
  // },
  // {
  //   id: new Date().getTime() + 100,
  //   description: "Recolectar la piedra del Cielo",
  //   done: false,
  // },
];

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const useTodo = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  //cuando algo cambia, se dispara la función
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: "[TODO] Add Todo",
      payload: todo,
    };
    //mando la acción al reducer
    dispatch(action);
  };

  const handleDeleteTodo = (id) => {
    const action = {
      type: "[TODO] Remove Todo",
      payload: id,
    };
    dispatch(action);
  };

  const handleToggleTodo = (id) => {
    const action = {
      type: "[TODO] Toggle Todo",
      payload: id,
    };
    dispatch(action);
  };

  const todosCount = todos.filter((todo) => !todo?.done).length;

  const pendingTodosCount = todos.filter((todo) => todo?.done).length;

  return {
    todos,
    todosCount,
    pendingTodosCount,
    handleDeleteTodo,
    handleToggleTodo,
    handleNewTodo,
  };
};
