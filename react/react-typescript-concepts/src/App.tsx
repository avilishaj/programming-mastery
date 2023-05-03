import Alert from "./components/Alert";
import ListComponent from "./components/ListComponent";
function handleSelectedItem(item: string) {
  console.log(item);
}
let animalsList = ["Lion", "Tiger", "Panda", "Bear", "Baboon", "Elephant"];
let cities = ["New York", "London", "Tokyo", "Berlin", "Shanghai"];
function App() {
  return (
    <>
      <ListComponent
        item={animalsList}
        heading="Select your favourite Animal"
        onSomething={handleSelectedItem}
      />
      <ListComponent
        item={cities}
        heading="Select your travel destination"
        onSomething={handleSelectedItem}
      />
      <hr />
      <Alert>
        <h1>This is just an alert</h1>
        <p>Passing html elements as children</p>
      </Alert>
    </>
  );
}
export default App;
