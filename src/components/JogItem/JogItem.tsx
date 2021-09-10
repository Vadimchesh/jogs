import { FC } from "react";
import moment from "moment";

import { ReactComponent as Icon } from "../../assets/img/icon.svg";
import { IJog } from "../../models/IJog";

import styles from "./JogItem.module.css";

interface IJogItem {
  jog: IJog;
}

const JogItem: FC<IJogItem> = ({ jog }) => {
  return (
    <div className={styles.box}>
      <Icon />
      <div className={styles.info}>
        <time>{moment(jog.date).format("MM-DD-YYYY")}</time>
        <div>
          Spead: <span> 10</span>
        </div>
        <div>
          Distance: <span>{jog.distance} km</span>
        </div>
        <time>
          Time: <span>{jog.time}</span>
        </time>
      </div>
    </div>
  );
};

export default JogItem;
