import { Fragment, useState } from "react";
import "./ListComponent.css";
// adding props so we can make the List component reusable
interface ListComponentProps {
  heading: string;
  item: string[];
  // we can also pass functions via props
  onSomething: (item: string) => void;
}

// destructuring the props as an argument
function ListComponent({ heading, item, onSomething }: ListComponentProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    // using fragments to wrap multiple elements
    // a better practice are the empty fragments <> </>
    <Fragment>
      <h1>{heading}</h1>
      {/* making a condition to check if the list is empty */}
      {item.length === 0 && <p>No items found!</p>}
      <ul>
        {item.map((item, index) => (
          <li
            // adding the classlist condition
            className={
              selectedIndex === index ? "active defaultClass" : "defaultClass"
            }
            key={item}
            onClick={() => {
              // setting the selected index using state
              setSelectedIndex(index);
              // we pass the item value to the function
              onSomething(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListComponent;
