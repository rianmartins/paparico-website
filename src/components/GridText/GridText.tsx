import React from "react";

import styles from "./GridText.module.css";
import Button from "../Button";
import { useTranslations } from "@/i18n/LanguageProvider";
import { WHATSAPP_URL } from "@/constants";

type GridTextProps = {
  title: string;
  text: string[];
  className?: string;
  hasCTAButton?: boolean;
};

const GridText: React.FC<GridTextProps> = ({
  title,
  text,
  hasCTAButton = false,
  className = "",
}) => {
  const t = useTranslations();
  return (
    <div className={`${styles.GridText} ${className}`}>
      <div className={styles.title}>{title}</div>
      <div className={styles.text}>
        {text.map((paragraph, index) => (
          <p key={index + paragraph.substring(0, 5)}>{paragraph}</p>
        ))}
      </div>
      {hasCTAButton && (
        <Button className={styles.CTAButton} onClick={() => window.open(WHATSAPP_URL, "_blank")}>
          {t.header.order}
        </Button>
      )}
    </div>
  );
};

export default GridText;
