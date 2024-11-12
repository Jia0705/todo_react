function Item(props) {
  const { text = "No task", isCompleted = false } = props;
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        <button className={`btn btn-sm ${isCompleted ? 'btn-success' : 'btn-light'}`}>
          <i className={`bi ${isCompleted ? 'bi-check-square' : 'bi-square'}`}></i>
        </button>
        <span className={`ms-2 ${isCompleted ? 'text-decoration-line-through' : ''}`}>
          {text}
        </span>
      </div>
      <div>
        <button className="btn btn-sm btn-danger">
          <i className="bi bi-trash"></i>
        </button>
      </div>
    </li>
  );
}

export default Item;


