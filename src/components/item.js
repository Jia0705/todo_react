import React from 'react';


function Item({task, toggleTask,deleteTask}) {
    const {id , text, isCompleted }= task;
    return (
      <li className="list-group-item d-flex justify-content-between align-items-center">
        <div>
        <button className={`btn btn-sm ${isCompleted ? 'btn-success' : 'btn-light'}`} onClick={() => toggleTask(id)}>
        <i className={`bi ${isCompleted ? 'bi-check-square' : 'bi-square'}`}></i>
        </button>
        <span className={`ms-2 ${isCompleted ? 'text-decoration-line-through' : ''}`}>
        {text}</span>
        </div>
        <button className="btn btn-sm btn-danger" onClick={() => {const confirm =window.confirm("Are you sure want to delete this task");
          if (confirm) {
            deleteTask(id)
          }
          }
        }
         >
                <i class="bi bi-trash"></i>
          </button>
      </li>
    );
}

export default Item;
