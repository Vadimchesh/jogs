import { FC } from "react";
import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";

import { useTypedSelector } from "../../hooks/useTypedSelector";
import { RouteNames } from "../../router";
import styles from "./Header.module.css";

const Header: FC = () => {
  const { isAuth } = useTypedSelector(state => state.auth);

  return (
    <nav className={styles.header}>
      {!isAuth ? (
        <div className={styles.logo}>
          <ReactSVG
            src="./src/assets/img/logo.svg"
            aria-label="Logo"
            role="img"
          />
        </div>
      ) : (
        <div className={styles.menu}>
          <Link to={RouteNames.JOGS}> Jogs </Link>
          <Link to={RouteNames.INFO}> INFO </Link>
          <Link to={RouteNames.CONTACT}>Contatcy Us</Link>
        </div>
      )}
    </nav>
  );
};

export default Header;
