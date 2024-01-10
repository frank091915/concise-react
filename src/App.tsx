import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import Like from "./components/Like";
import "./App.css";

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
      <Like
        onClick={() => {
          console.log("like clicked");
        }}
      />
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
