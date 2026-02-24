import { FC } from "react";

import styles from "./TermsModal.module.css";
import Modal from "@/components/Modal";
import { useTranslations } from "@/i18n/LanguageProvider";
import Image from "next/image";

interface TermsModalProps {
  open: boolean;
  onClose: () => void;
}

const TermsModal: FC<TermsModalProps> = ({ open, onClose }) => {
  const t = useTranslations();
  return (
    <Modal
      className={styles.TermsModal}
      title={t.termsAndConditions.title}
      open={open}
      onClose={onClose}
    >
      <div className={styles.textContent}>{t.termsAndConditions.content}</div>
    </Modal>
  );
};

export default TermsModal;
