import Item from "./item";

function ItemsList(props) {
  const { list, onTaskDelete, onTaskDone} = props;
  return (
    <ul className="list-group">
      {list.map((item) => {
        return (
        <Item 
        key={item.id}
        text={item.text} 
        isCompleted={item.isCompleted} 
        {...item}
        onTaskDelete={(id) => {
          onTaskDelete(id);
        }}
        onTaskDone={(id) => {
          onTaskDone(id);
        }}
        />
      );
      })}
    </ul>
  );
}

export default ItemsList;