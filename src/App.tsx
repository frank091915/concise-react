import ListGroup from "./components/ListGroup";
import "./App.css";

function App() {
  const cities = ["New York", "San Francisco", "Tokyo", "Paris"];
  const heading = 'cities'
  return <ListGroup items={cities} heading={heading}></ListGroup>;
}

export default App;
