import React from "react";
import styles from "../styles/LoginForm.module.css";

const LoginInputForm = () => {
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
      <button className={styles.submitButton} type="submit">
        Log In
      </button>
    </form>
  );
};

export default LoginInputForm;
