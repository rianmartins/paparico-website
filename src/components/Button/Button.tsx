import { FC } from "react";
import cx from "classnames";

import styles from "./Button.module.css";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  size?: "small" | "medium" | "large";
};

const Button: FC<ButtonProps> = ({ children, onClick, size = "medium", className = "" }) => {
  return (
    <button
      className={cx(styles.Button, styles[`Button--size-${size}`], className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
