import { useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import styles from "./Like.module.css";
interface Props {
  onClick: () => void;
  size?: number;
}
const Like = ({ onClick, size = 40 }: Props) => {
  const [liked, setLiked] = useState(false);
  const handleClick = () => {
    setLiked(!liked);
    onClick();
  };
  return (
    <AiOutlineLike
      size={size}
      onClick={handleClick}
      className={liked ? styles.liked : ""}
    />
  );
};

export default Like;
