import { FC } from "react";
import Image from "next/image";

import styles from "./SocialMediaIcon.module.css";

type SocialMediaIconProps = {
  icon: string;
  link: string;
  label: string;
  width?: number;
  height?: number;
};

const SocialMediaIcon: FC<SocialMediaIconProps> = ({
  icon,
  link,
  label,
  width = 26,
  height = 22,
}) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" aria-label={label}>
      <Image
        src={icon}
        alt={icon + "-icon"}
        className={styles.SocialMediaIcon}
        width={width}
        height={height}
      />
    </a>
  );
};

export default SocialMediaIcon;
