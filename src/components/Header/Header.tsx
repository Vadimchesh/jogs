import { FC } from "react";
import { Link } from "react-router-dom";

import { useTypedSelector } from "../../hooks/useTypedSelector";
import { RouteNames } from "../../router";

import { ReactComponent as Logo } from "../../assets/img/logo.svg";
import { ReactComponent as Filter } from "../../assets/img/filter.svg";

import styles from "./Header.module.css";

const Header: FC = () => {
  const { isAuth } = useTypedSelector(state => state.auth);

  return (
    <nav className={styles.header}>
      <Link to="/" className={styles.logo}>
        <Logo />
      </Link>
      {!isAuth ? (
        <></>
      ) : (
        <>
          <div className={styles.menu}>
            <Link to={RouteNames.JOGS} className={styles.link}>
              jogs
            </Link>
            <Link to={RouteNames.INFO} className={styles.link}>
              info
            </Link>
            <Link to={RouteNames.CONTACT} className={styles.link}>
              contatcy us
            </Link>
            <Link to={RouteNames.CONTACT} className={styles.link}>
              <Filter className={styles.filter} />
            </Link>
          </div>
        </>
      )}
    </nav>
  );
};

export default Header;
