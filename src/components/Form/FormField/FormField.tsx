import React from "react";

import styles from "./FormField.module.css";

type FormFieldProps = {
  children: React.ReactNode;
};

const FormField: React.FC<FormFieldProps> = ({ children }) => {
  return <div className={styles.FormField}>{children}</div>;
};

export default FormField;
