import { FC } from "react";

import styles from "./SocialMediaIcon.module.css";

type SocialMediaIconProps = {
  icon: string;
  link: string;
};

const SocialMediaIcon: FC<SocialMediaIconProps> = ({ icon, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img src={icon} alt="icon" className={styles.SocialMediaIcon} />
    </a>
  );
};

export default SocialMediaIcon;
