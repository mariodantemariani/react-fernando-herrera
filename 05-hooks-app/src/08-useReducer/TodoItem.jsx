import PropTypes from "prop-types";

export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
  //  const { id, description } = todo;

  return (
    <li
      key={todo.id}
      className={`list-group-item d-flex justify-content-between`}
    >
      <span
        className={`align-self-center ${
          todo?.done && "text-decoration-line-through"
        }`}
        onClick={() => onToggleTodo(todo.id)}
        aria-label="span"
      >
        {todo.description}
      </span>
      <button
        className="btn btn-danger align-self-center btn-sm"
        onClick={() => onDeleteTodo(todo.id)}
        aria-label="button"
      >
        Delete
      </button>
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object,
  onDeleteTodo: PropTypes.func,
  onToggleTodo: PropTypes.func,
};
