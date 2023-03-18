import React, { useState } from "react";
import styles from "../styles/LoginForm.module.css";

const LoginForm = () => {
  const [showModal, setShowModal] = useState(false);

  const closeLoginForm = () => {
    setShowModal(false);
    document.getElementById("password").value = "";
  };

  const handleClickOutside = (event) => {
    if (event.target.className === styles.loginModal) {
      closeLoginForm();
    }
  };

    return (
      
    <div className={styles.mainContent}>
      <button className={styles.loginBtn} onClick={() => setShowModal(true)}>
        Login
      </button>
      {showModal && (
        <div className={styles.loginModal} onClick={handleClickOutside}>
          <div className={styles.loginForm}>
            <h1 className={styles.h1}>R</h1>
            <h2 className={styles.h2}>Welcome, user</h2>
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
            <button className={styles.closeBtn} onClick={closeLoginForm}>
              x
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
