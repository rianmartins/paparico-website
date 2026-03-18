import cx from "classnames";
import React from "react";

import styles from "./Input.module.css";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  hasError?: boolean;
};

const Input: React.FC<InputProps> = ({ className, hasError = false, ...props }) => {
  return (
    <input className={cx(styles.Input, className, { [styles.InputError]: hasError })} {...props} />
  );
};

export default Input;
