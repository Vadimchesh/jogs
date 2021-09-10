import { FC } from "react";

import { useActions } from "../../hooks/useActions";

import { ReactComponent as Logo } from "../../assets/img/bear.svg";

import styles from "./LoginButton.module.css";

const LoginButton: FC = () => {
  const { login } = useActions();
  const handleClick = () => {
    login();
  };

  return (
    <div className={styles.box}>
      <Logo />
      <button className={styles.button} onClick={handleClick}>
        Let me in
      </button>
    </div>
  );
};

export default LoginButton;
