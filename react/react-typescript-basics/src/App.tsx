import ListGroup from "./components/ListGroup";
function App() {
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  let cities = ["New York", "Tokyo", "Rome", "Berlin"];
  // let countries = ['Germany' , 'Italy' , 'Spain' , 'Albania']
  return (
    <ListGroup items={cities} heading="list" onSelectItem={handleSelectItem} />
    // <ListGroup items={countries} heading="Countries"/>

  );
}

export default App;
