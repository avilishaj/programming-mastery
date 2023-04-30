import ListGroup from "./components/ListGroup";
function App() {
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  let items = ["New York", "Tokyo", "Rome", "Berlin"];
  return (
    <ListGroup items={items} heading="list" onSelectItem={handleSelectItem} />
  );
}

export default App;
