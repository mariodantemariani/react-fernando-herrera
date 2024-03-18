// const initialState = [
//   {
//     id: 1,
//     todo: "Recolectar la piedra del Alma",
//     done: false,
//   },
//   {
//     id: 2,
//     todo: "Recolectar la piedra del Cielo",
//     done: false,
//   },
//   {
//     id: 3,
//     todo: "Recolectar la piedra del Espacio",
//     done: false,
//   },
// ];

// const todoReducer = (state = initialState, action = {}) => {
//   if (action?.type === "[TODO] add todo") {
//     return [...state, action.payload];
//   }
// };

// let todos = todoReducer();

// const newTodo = {
//   id: 4,
//   todo: "Recolectar la piedra del Tiempo",
//   done: false,
// };

// const addTodoAction = {
//   type: "[TODO] add todo",
//   payload: newTodo,
// };

// // todos = todoReducer(todos, addTodoAction);

// // console.log({ todos });
