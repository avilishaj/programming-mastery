import ListGroup from "./components/ListGroup";
function App() {
  let items = ["New York", "Tokyo", "Rome", "Berlin"];
  return <ListGroup items={items} heading="list" />;
}

export default App;
