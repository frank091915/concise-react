import { MouseEvent } from "react";
function ListGroup() {
  let cities = ["New York", "San Francisco", "Tokyo", "Paris"];
  const message = (customMessage?: string) =>
    cities.length && <p>{customMessage && "No Item Found"}</p>;
  const handleClick = (event: MouseEvent) => {
    console.log(event);
  };
  return (
    <>
      <h1>Cites</h1>
      {message()}
      <ul className="list-group">
        {cities.map((item) => (
          <li key={item} onClick={handleClick} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
