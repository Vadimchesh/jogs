import { FC, FormEvent, useState } from "react";

import styles from "./ContactFrom.module.css";

const ContactFrom: FC = () => {
  const [username, setUsername] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className={styles.loginWrapper}>
      <h1>Send feedback</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Name</p>
          <input type="text" onChange={e => setUsername(e.target.value)} />
        </label>
        <label>
          <p>Message</p>
          <input type="password" onChange={e => setMessage(e.target.value)} />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ContactFrom;
