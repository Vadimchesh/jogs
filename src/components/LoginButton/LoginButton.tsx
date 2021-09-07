import { FC } from "react";
import { ReactSVG } from "react-svg";
import { useActions } from "../../hooks/useActions";

import styles from "./LoginButton.module.css";

const LoginButton: FC = () => {
  const { setIsAuth } = useActions();
  const handleClick = () => {
    setIsAuth(true);
  };

  return (
    <div className={styles.box}>
      <ReactSVG
        src="./src/assets/img/bear.svg"
        aria-label="Logo"
        role="img"
        className={styles.svg}
      />
      <div className={styles.button} onClick={handleClick}>
        Let me in
      </div>
    </div>
  );
};

export default LoginButton;
