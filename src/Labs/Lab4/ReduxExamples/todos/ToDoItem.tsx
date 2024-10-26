import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";

function ToDoItem({ todo }: any) {
  const dispatch = useDispatch();
  return (
    <li key={todo.id} className="list-group-item d-flex">
      <p className="flex-grow-1">{todo.title}</p>
      <button
        style={{ marginLeft: "12px" }}
        className="btn btn-primary"
        onClick={() => dispatch(setTodo(todo))}
      >
        {" "}
        Edit{" "}
      </button>
      <button
        style={{ marginLeft: "12px" }}
        className="btn btn-danger"
        onClick={() => dispatch(deleteTodo(todo.id))}
      >
        {" "}
        Delete{" "}
      </button>
    </li>
  );
}
export default ToDoItem;
