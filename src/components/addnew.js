import{useState} from 'react';

function AddNewForm(props) {

  const {onNewTaskAdded} = props
  const [taskName,setTaskText] = useState("");

  return (
    <div>
      <form>
        <div className="mt-4 d-flex justify-content-between align-items-center">
          <input
            type="text"
            className="form-control"
            placeholder="Add new item..."
            name="taskText"
            value={taskName}
            required
            onChange={(event) => setTaskText(event.target.value)}
          />
          <button className="btn btn-primary btn-sm rounded ms-2" onClick={(event) => {event.preventDefault();
            if(taskName === "") {
              alert("Please enter the text");
            }else {
              onNewTaskAdded(taskName);
              setTaskText("");
            }
          }}>Add</button>
          
        </div>
      </form>
    </div>
  );
  }
   
  
  
  export default AddNewForm;
  
