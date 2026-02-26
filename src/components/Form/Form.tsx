import React from "react";

import styles from "./Form.module.css";
import Button from "../Button";

type FormProps = {
  children: React.ReactNode;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
  onCancel?: () => void;
  submitLabel?: string;
  submittingLabel?: string;
  cancelLabel?: string;
  isSubmitting?: boolean;
  statusMessage?: React.ReactNode;
  statusTone?: "success" | "error" | "info";
};

export const Form: React.FC<FormProps> = ({
  children,
  onSubmit,
  onCancel,
  submitLabel = "Enviar",
  submittingLabel,
  cancelLabel = "Cancelar",
  isSubmitting = false,
  statusMessage,
  statusTone,
}) => {
  const currentSubmitLabel = isSubmitting && submittingLabel ? submittingLabel : submitLabel;

  const statusClassName = `${styles.status} ${
    statusTone === "success"
      ? styles.statusSuccess
      : statusTone === "error"
        ? styles.statusError
        : statusTone === "info"
          ? styles.statusInfo
          : ""
  }`;

  return (
    <form className={styles.Form} onSubmit={onSubmit} noValidate>
      {children}
      <div className={styles.actions}>
        <Button type="button" variant="secondary" onClick={onCancel} disabled={isSubmitting}>
          {cancelLabel}
        </Button>
        <Button type="submit" variant="primary" disabled={isSubmitting}>
          {currentSubmitLabel}
        </Button>
      </div>
      {statusMessage ? <p className={statusClassName}>{statusMessage}</p> : null}
    </form>
  );
};

export default Form;
