import { useState } from "react";
import styled from "styled-components";

import styles from "./ListGroup.module.css";

const List = styled.ul`
  color: aquamarine !important;
`;

interface ListItemProps {
  active: boolean;
}
const ListItem = styled.li<ListItemProps>`
  padding: 5px 0;
  background: ${(props) => (props.active ? "blue" : "none")};
`;
interface Props {
  items: string[];
  heading: string;
  onSelected: (item: string) => void;
}

function ListGroup({ items: cities, heading, onSelected }: Props) {
  console.log(styles, "styles");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const message = (customMessage?: string) =>
    cities.length && <p>{customMessage && "No Item Found"}</p>;
  const handleClick = (index: number) => {
    setSelectedIndex(index);
  };
  return (
    <>
      <h1>{heading}</h1>
      {message()}
      <List className="list-group">
        {cities.map((item, index) => (
          <ListItem
            key={item}
            active={selectedIndex === index}
            onClick={() => {
              handleClick(index);
              onSelected(item);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListGroup;
