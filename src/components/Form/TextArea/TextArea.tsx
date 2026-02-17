import React from "react";

import styles from "./TextArea.module.css";

type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const TextArea: React.FC<TextAreaProps> = ({ ...props }) => {
  return <textarea className={styles.TextArea} {...props} />;
};

export default TextArea;
