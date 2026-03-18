import React from "react";

import styles from "./FormField.module.css";

type FormFieldProps = {
  children: React.ReactNode;
  errorMessage?: string;
  errorId?: string;
};

const FormField: React.FC<FormFieldProps> = ({ children, errorMessage, errorId }) => {
  return (
    <div className={styles.FormField}>
      {children}
      {errorMessage ? (
        <p id={errorId} className={styles.error} role="alert">
          {errorMessage}
        </p>
      ) : null}
    </div>
  );
};

export default FormField;
