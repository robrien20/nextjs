import React from "react";
import styles from "../styles/LoginForm.module.css";
import LoginInputForm from "./LoginInputForm";
import useLoginForm from "../hooks/useLoginForm";

const LoginForm = () => {
  const { showModal, openLoginForm, closeLoginForm } = useLoginForm();

  const handleClickOutside = (event) => {
    if (event.target.className === styles.loginModal) {
      closeLoginForm();
    }
  };

  return (
    <div className={styles.mainContent}>
      <button className={styles.loginBtn} onClick={openLoginForm}>
        Login
      </button>
      {showModal && (
        <div className={styles.loginModal} onClick={handleClickOutside}>
          <div className={styles.loginForm}>
            <button className={styles.closeBtn} onClick={closeLoginForm}>
              x
            </button>
            <h1 className={styles.h1}>R</h1>
            <h2 className={styles.h2}>Welcome, user</h2>
            <LoginInputForm />
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
