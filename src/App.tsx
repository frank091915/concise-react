import ListGroup from "./components/ListGroup";
import "./App.css";
import Alert from "./components/Alert";

function App() {
  const cities = ["New York", "San Francisco", "Tokyo", "Paris"];
  const heading = "cities";
  const handler = (item: string) => {
    console.log(item);
  };
  return (
    <Alert>
      lovely <span>tutorials</span>
    </Alert>
  );
}

export default App;
