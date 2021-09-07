import { FC } from "react";
import LoginButton from "../components/LoginButton/LoginButton";

import styles from "./Login.module.css";

const Login: FC = () => {
  return (
    <div className={styles.main}>
      <LoginButton />
    </div>
  );
};

export default Login;
