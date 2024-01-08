import { useState } from "react";

interface Props{
  items: string [];
  heading: string;
}

function ListGroup({items: cities, heading}: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const message = (customMessage?: string) =>
    cities.length && <p>{customMessage && "No Item Found"}</p>;
  const handleClick = (index: number) => {
    setSelectedIndex(index)
  };
  return (
    <>
      <h1>{heading}</h1>
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
