import cx from "classnames";
import React from "react";

import styles from "./TextArea.module.css";

type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  hasError?: boolean;
};

const TextArea: React.FC<TextAreaProps> = ({ className, hasError = false, ...props }) => {
  return (
    <textarea
      className={cx(styles.TextArea, className, { [styles.TextAreaError]: hasError })}
      {...props}
    />
  );
};

export default TextArea;
