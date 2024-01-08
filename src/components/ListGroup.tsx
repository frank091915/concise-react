import { MouseEvent, useState } from "react";
function ListGroup() {
  let cities = ["New York", "San Francisco", "Tokyo", "Paris"];
  const [selectedIndex, setSelectedIndex] = useState(0)
  const message = (customMessage?: string) =>
    cities.length && <p>{customMessage && "No Item Found"}</p>;
  const handleClick = (index: number) => {
    setSelectedIndex(index)
  };
  return (
    <>
      <h1>Cites</h1>
      {message()}
      <ul className="list-group">
        {cities.map((item, index) => (
          <li key={item} onClick={() => handleClick(index)} className={selectedIndex === index ? "list-group-item active" : 'list-group-item'}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
