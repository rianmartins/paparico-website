import React from "react";

import styles from "./Form.module.css";
import Button from "../Button";

type FormProps = {
  children: React.ReactNode;
};

export const Form: React.FC<FormProps> = ({ children }) => {
  return (
    <form className={styles.Form}>
      {children}
      <div className={styles.actions}>
        <Button variant="secondary">Cancelar</Button>
        <Button variant="primary">Enviar</Button>
      </div>
    </form>
  );
};

export default Form;
