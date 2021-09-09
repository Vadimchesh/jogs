import { FC } from "react";
import { ReactSVG } from "react-svg";

import { useActions } from "../../hooks/useActions";
import styles from "./LoginButton.module.css";

const LoginButton: FC = () => {
  const { login } = useActions();
  const handleClick = () => {
    login();
  };

  return (
    <div className={styles.box}>
      <ReactSVG
        src="./src/assets/img/bear.svg"
        aria-label="Logo"
        role="img"
        className={styles.svg}
      />
      <button className={styles.button} onClick={handleClick}>
        Let me in
      </button>
    </div>
  );
};

export default LoginButton;
