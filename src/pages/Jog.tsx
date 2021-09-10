import { FC, useEffect } from "react";

import JogItem from "../components/JogItem/JogItem";

import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { IJog } from "../models/IJog";

import styles from "./Jog.module.css";

const Jog: FC = () => {
  const { getJogs } = useActions();
  const jogs = useTypedSelector(state => state.event.jogs);

  useEffect(() => {
    if (!jogs) return;
    getJogs();
  }, [jogs]);

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
      {jogs.jogs.map((jog: IJog) => (
        <JogItem jog={jog} key={jog.id} />
      ))}
    </main>
  );
};

export default Jog;
