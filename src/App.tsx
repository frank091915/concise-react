import ListGroup from "./components/ListGroup";
import "./App.css";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const cities = ["New York", "San Francisco", "Tokyo", "Paris"];
  const heading = "cities";
  const [visible, setVisibiliry] = useState(false);
  const showAlert = () => {
    setVisibiliry(true);
  };
  const closeAlert = () => {
    setVisibiliry(false);
  };
  return (
    <>
      <ListGroup
        items={cities}
        heading={heading}
        onSelected={(item) => {
          console.log(item);
        }}
      ></ListGroup>
      {visible && <Alert onClose={closeAlert}>my alert</Alert>}
      <Button onClick={showAlert}>my button</Button>
    </>
  );
}

export default App;
