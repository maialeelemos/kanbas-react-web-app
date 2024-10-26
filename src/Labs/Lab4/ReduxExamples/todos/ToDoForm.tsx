import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";

function TodoForm() {
  const { todo } = useSelector((state: any) => state.todosReducer);
  const dispatch = useDispatch();
  return (
    <li className="list-group-item d-flex justify-content-between">
      <input
        value={todo.title}
        onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))}
      />
      <div>
        <button
          style={{ marginLeft: "12px" }}
          className="btn btn-warning"
          onClick={() => dispatch(updateTodo(todo))}
        >
          {" "}
          Update{" "}
        </button>
        <button
          style={{ marginLeft: "12px" }}
          className="btn btn-success"
          onClick={() => dispatch(addTodo(todo))}
        >
          {" "}
          Add{" "}
        </button>
      </div>
    </li>
  );
}
export default TodoForm;
