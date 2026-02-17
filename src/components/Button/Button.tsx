import { FC } from "react";
import cx from "classnames";

import styles from "./Button.module.css";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  size?: "small" | "medium" | "large";
  variant?: "primary" | "secondary";
  style?: React.CSSProperties;
};

const Button: FC<ButtonProps> = ({
  children,
  onClick,
  size = "medium",
  className = "",
  variant = "primary",
  style = {},
}) => {
  return (
    <button
      style={style}
      className={cx(
        styles.Button,
        styles[`Button--size-${size}`],
        styles[`Button--variant-${variant}`],
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
