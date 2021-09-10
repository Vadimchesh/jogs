import { FC, useEffect } from "react";
import { useActions } from "../hooks/useActions";

import styles from "./Jog.module.css";

const Jog: FC = () => {
  const { getJogs } = useActions();
  const handleClick = () => {
    getJogs();
  };

  useEffect(() => {
    getJogs();
  });
  return (
    <main>
      <div className={styles.header}>
        <div>
          <span>Date from</span> <input></input>
        </div>
        <div>
          Date to <input></input>
        </div>
      </div>
      <div className={styles.jogs}>Jogs</div>
      <button onClick={handleClick}>Get jogs</button>
    </main>
  );
};

export default Jog;
