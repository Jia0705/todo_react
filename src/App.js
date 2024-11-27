import { useState } from "react";
import { nanoid } from "nanoid";

// Import components
import AddNewForm from "./components/addnew";
import ItemsList from "./components/list";

function App() {
  // Load items from localStorage
  const stringItems = localStorage.getItem("items");
  // Turn string to array
  let items = JSON.parse(stringItems);

  if (!items) {
    items = [];
  }

  // Initialize state with the loaded items
  const [list, setList] = useState(items);

  const updateLocalStorage = (updatedList) => {
    // Convert updatedList to a string
    let stringList = JSON.stringify(updatedList);

    localStorage.setItem("items", stringList);
  };

  return (
    <div
      className="card rounded shadow-sm"
      style={{ maxWidth: "500px", margin: "60px auto" }}
    >
      <div className="card-body">
        <h3 className="card-title mb-3">My Todo List</h3>
        {/* Items List */}
        <ItemsList
          list={list}
          onTaskDelete={(id) => {
            // Filter out the task with the given id
            const newList = list.filter((t) => t.id !== id);
            // Update the list with setState and save to localStorage
            setList(newList);
            updateLocalStorage(newList);
          }}
          onTaskDone={(id) => {
            const updatedList = list.map((item) => {
              if (item.id === id) {
                return { ...item, isCompleted: !item.isCompleted };
              } else {
                return item;
              }
            });
            setList(updatedList);
            updateLocalStorage(updatedList);
          }}
        />

        {/* Add New Form */}
        <AddNewForm
          onNewTaskAdded={(taskName) => {
            // Clone the existing state
            const newList = [...list];
            // Push the new item into the newList
            newList.push({
              id: nanoid(), // Generate unique id
              text: taskName,
              isCompleted: false, // Default state
            });
            // Update the state and save to localStorage
            setList(newList);
            updateLocalStorage(newList);
          }}
        />
      </div>
    </div>
  );
}

export default App;
