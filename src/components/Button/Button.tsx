import { type ButtonHTMLAttributes, type FC, type ReactNode } from "react";
import cx from "classnames";

import styles from "./Button.module.css";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  className?: string;
  size?: "small" | "medium" | "large";
  variant?: "primary" | "secondary";
};

const Button: FC<ButtonProps> = ({
  children,
  size = "medium",
  className = "",
  variant = "primary",
  type = "button",
  ...props
}) => {
  return (
    <button
      type={type}
      {...props}
      className={cx(
        styles.Button,
        styles[`Button--size-${size}`],
        styles[`Button--variant-${variant}`],
        className,
      )}
    >
      {children}
    </button>
  );
};

export default Button;
