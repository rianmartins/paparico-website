"use client";

import { type FC, type ReactNode, type MouseEventHandler, useEffect, useId, useRef } from "react";
import cx from "classnames";

import styles from "./Modal.module.css";
import Button from "../Button";
import { useTranslations } from "@/i18n/LanguageProvider";

type ModalSize = "small" | "medium" | "large";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  title?: ReactNode;
  description?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
  className?: string;
  size?: ModalSize;
  ariaLabel?: string;
};

const Modal: FC<ModalProps> = ({
  open,
  onClose,
  title,
  description,
  children,
  footer,
  className = "",
  size = "medium",
  ariaLabel = "Modal dialog",
}) => {
  const t = useTranslations();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const descriptionId = useId();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open && !dialog.open) {
      dialog.showModal();
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleCancel = (event: Event) => {
      event.preventDefault();
      onClose();
    };

    dialog.addEventListener("cancel", handleCancel);
    return () => dialog.removeEventListener("cancel", handleCancel);
  }, [onClose]);

  useEffect(() => {
    if (!open) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [open]);

  const handleBackdropClick: MouseEventHandler<HTMLDialogElement> = (event) => {
    if (event.target === dialogRef.current) {
      onClose();
    }
  };

  return (
    <dialog
      ref={dialogRef}
      className={cx(styles.Modal, styles[`Modal--${size}`], className)}
      aria-modal="true"
      aria-labelledby={title ? titleId : undefined}
      aria-describedby={description ? descriptionId : undefined}
      aria-label={title ? undefined : ariaLabel}
      onClick={handleBackdropClick}
    >
      <div className={styles.inner}>
        <div className={styles.header}>
          {title ? (
            <h2 id={titleId} className={styles.title}>
              {title}
            </h2>
          ) : null}
        </div>
        {description ? (
          <p id={descriptionId} className={styles.description}>
            {description}
          </p>
        ) : null}
        <div className={styles.content}>{children}</div>
        {footer ? (
          <div className={styles.footer}>{footer}</div>
        ) : (
          <div className={styles.footer}>
            <Button aria-label="Fechar" onClick={onClose}>
              {t.modal.close}
            </Button>
          </div>
        )}
      </div>
    </dialog>
  );
};

export default Modal;
