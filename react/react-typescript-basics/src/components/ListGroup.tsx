import { useState } from "react";
import "./listgroup.css";
// import { Fragment } from "react";  -- we dont have to use fragments

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}
// destructuring the prop
function ListGroup({items , heading , onSelectItem}:Props ){
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>{heading}</h1>
      {/* {items.length === 0 ? <p>No items found!</p> : null} */}
      {items.length === 0 && <p>No items found!</p>}
      <ul>
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index ? "active default-class" : "default-class"
            }
            // onClick={selectedIndex = index}
            key={item} 
            // when we click on an item it adds the state
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
