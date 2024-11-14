import { useState } from "react";
import { nanoid } from "nanoid";

import AddNewForm from "./components/addnew";
import ItemsList from "./components/list";

function App() {
  const [list, setList] = useState([]);

  return (
    <div
      className="card rounded shadow-sm"
      style={{ maxWidth: "500px", margin: "60px auto" }}
    >
      <div className="card-body">
        <h3 className="card-title mb-3">My Todo List</h3>
        <ItemsList
          list={list}
          onTaskDelete={(id) => {
            // filter OUT the task with the given id
            const newList = list.filter((t) => t.id !== id);
            // update the newList with the setState function
            setList(newList);
          }}
          
          onTaskDone={(id) => {
            const sleepy = list.map((item) => {
              if (item.id === id) {
                return {...item, isCompleted: !item.isCompleted};
              } else{
              return item;
              }
            });
            setList(sleepy);
          }}
        />

        <AddNewForm
          onNewTaskAdded={(taskName) => {
            // clone the existing state
            const newList = [...list];
            // push the new item into the newList
            newList.push({
              id: nanoid(), // generate id
              // id: newList.length + 1,
              text: taskName,
            });
            // update the newList with the setState function
            setList(newList);
          }}
        />
      </div>
    </div>
  );
}

export default App;
