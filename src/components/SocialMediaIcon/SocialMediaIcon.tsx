import { FC } from "react";
import Image from "next/image";

import styles from "./SocialMediaIcon.module.css";

type SocialMediaIconProps = {
  icon: string;
  link: string;
  width?: number;
  height?: number;
};

const SocialMediaIcon: FC<SocialMediaIconProps> = ({ icon, link, width = 26, height = 22 }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <Image
        src={icon}
        alt="icon"
        className={styles.SocialMediaIcon}
        width={width}
        height={height}
      />
    </a>
  );
};

export default SocialMediaIcon;
