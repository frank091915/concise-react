import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  color?: "Primary" | "Secondary" | "Success";
  onClick: () => void;
}
const Button = ({ children, color, onClick }: Props) => {
  const secondClassName = color ? `btn-${color}` : "btn-primary";
  return (
    <div className={`btn ${secondClassName}`} onClick={onClick}>
      {children}
    </div>
  );
};

export default Button;
