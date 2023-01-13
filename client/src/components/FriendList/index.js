import React from 'react';
import { Link } from 'react-router-dom';

const ItemList = ({items }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  return ( <div>
    {items.map((item) => (
      <Item key = {item.id} item={item} onClick={() =>
      setSelectedItem(item)} />
    ))}

  </div>)
  function Item({item, onClick}){
    return(
      <div onClick={onClick}>
        <p>{item.name}</p>
        <p>{item.price}</p>
      </div>
    )
  }
      }

export default ItemList;
