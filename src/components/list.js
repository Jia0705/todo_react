import Item from "./item";

function ItemsList(props) {
  const { list } = props;
  return (
      <ul className="list-group">
      {list.map((item) => (
      <Item id={item.id} text={item.text} isCompleted={item.isCompleted} />
  ))}
    </ul>
  );
}

export default ItemsList;



 