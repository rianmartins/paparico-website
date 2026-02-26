import React from "react";

import styles from "./InputLabel.module.css";

type InputLabelProps = {
  children: React.ReactNode;
};

export const InputLabel: React.FC<InputLabelProps> = ({ children }) => {
  return <label className={styles.InputLabel}>{children}</label>;
};

export default InputLabel;
