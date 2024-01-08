import ListGroup from "./components/ListGroup";
import "./App.css";

function App() {
  const cities = ["New York", "San Francisco", "Tokyo", "Paris"];
  const heading = 'cities'
  const handler = (item: string) =>{
    console.log(item)
  }
  return <ListGroup items={cities} heading={heading} onSelected={handler}></ListGroup>;
}

export default App;
