import React, {useState} from 'react';
import {nanoid} from 'nanoid'
import AddNewForm from "./components/addnew";
import ItemList from "./components/list";

function App() {

  const [list, setList] = useState ([])


  return (
    <div className="App">Todo
    <div
      className="card rounded shadow-sm"
      style={{
        maxWidth: "500px",
        margin: "60px auto"
      }}
    >
      <div className="card-body">
        <h3 className="card-title mb-3">My Todo List</h3>
        <ItemList
          list={list}
          deleteTask={(id) => {
            // filter OUT the task with the given id
            const newList = list.filter((t) => t.id !== id);
            // update the newList with the setState function
            setList(newList);
          }}
          
          toggleTask={(id) => {
            const taskList = list.map((item) => {
              if (item.id === id) {
                return {...item, isCompleted: !item.isCompleted};
              } else{
              return item;
              }
            });
            setList(taskList);
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
     </div>
  );
}


export default App;
