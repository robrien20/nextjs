// components/RegistrationInputForm.js
import React from "react";
import styles from "../styles/LoginForm.module.css";

const RegistrationInputForm = ({ username, onUsernameChange }) => {
  return (
    <form className={styles.form}>
      <label className={styles.label} htmlFor="username">
        Username:
      </label>
      <input
        className={styles.input}
        type="text"
        id="username"
        name="username"
        value={username}
        onChange={onUsernameChange}
        required
      />
      <label className={styles.label} htmlFor="email">
        Email:
      </label>
      <input
        className={styles.input}
        type="email"
        id="email"
        name="email"
        required
      />
      <label className={styles.label} htmlFor="password">
        Password:
      </label>
      <input
        className={styles.input}
        type="password"
        id="password"
        name="password"
        required
      />
      <label className={styles.label} htmlFor="verifyPassword">
        Verify Password:
      </label>
      <input
        className={styles.input}
        type="password"
        id="verifyPassword"
        name="verifyPassword"
        required
      />
      <button className={styles.submitButton} type="submit">
        Register
      </button>
    </form>
  );
};

export default RegistrationInputForm;
