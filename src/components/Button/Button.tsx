import { type CSSProperties, type FC, type MouseEventHandler, type ReactNode } from "react";
import cx from "classnames";

import styles from "./Button.module.css";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  size?: "small" | "medium" | "large";
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary";
  style?: CSSProperties;
};

const Button: FC<ButtonProps> = ({
  children,
  onClick,
  size = "medium",
  className = "",
  variant = "primary",
  style = {},
  disabled = false,
  type = "button",
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
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
