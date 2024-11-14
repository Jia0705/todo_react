import Item from "./item";

function ItemsList({list, toggleTask, deleteTask}) {
    return (
        <div
      className="card rounded shadow-sm"
      style={{
        maxWidth: "500px",
        margin: "60px auto"
      }}
    >
       <ul class="list-group">
      {list.map((task) => {
        return <Item 
        key={task.id}
        text={Item.text}
        isCompleted={Item.isCompleted}
        task={task}
        toggleTask={toggleTask}
        deleteTask={deleteTask}/>;
      })}
      </ul>
      </div>
    );
}

export default ItemsList;
