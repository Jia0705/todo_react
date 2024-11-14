function Item(props) {
  const { id, text, isCompleted, onTaskDelete, onTaskDone } = props;
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        <button
          className={`btn btn-sm ${isCompleted ? "btn-success" : "btn-light"}`}
          onClick={() => onTaskDone(id)}
        >
          <i
            className={`bi ${isCompleted ? "bi-check-square" : "bi-square"}`}
            onClick={() => onTaskDone(id)}
          ></i>
        </button>
        <span
          className={`ms-2 ${
            isCompleted ? "text-decoration-line-through" : ""
          }`} onClick={() => onTaskDone(id)}
        >
          {text}
        </span>
      </div>
      <div>
        <button
          className="btn btn-sm btn-danger"
          onClick={() => {
            const confirm = window.confirm(
              "Are you sure you want to delete this task?"
            );
            if (confirm) {
              // pass the id up to the List
              onTaskDelete(id);
            }
          }}
        >
          <i className="bi bi-trash"></i>
        </button>
      </div>
    </li>
  );
}

export default Item;
