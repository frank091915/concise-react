import { ReactNode } from "react";

import styles from "./Button.module.css";

interface Props {
  children: ReactNode;
  color?: "Primary" | "Secondary" | "Success";
  onClick: () => void;
}
const Button = ({ children, color = "Primary", onClick }: Props) => {
  console.log(styles["btn-" + color]);
  const calculatedClassName = ["btn", styles["btn-" + color]].join(" ");
  return (
    <div className={calculatedClassName} onClick={onClick}>
      {children}
    </div>
  );
};

export default Button;
