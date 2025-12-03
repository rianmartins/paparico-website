import { FC } from "react";
import Image from "next/image";

import styles from "./SocialMediaIcon.module.css";

type SocialMediaIconProps = {
  icon: string;
  link: string;
};

const SocialMediaIcon: FC<SocialMediaIconProps> = ({ icon, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <Image src={icon} alt="icon" className={styles.SocialMediaIcon} width={26} height={22} />
    </a>
  );
};

export default SocialMediaIcon;
