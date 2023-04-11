// components/LoginForm.js
import React, { useState, useEffect } from "react";
import styles from "../styles/LoginForm.module.css";
import LoginInputForm from "./LoginInputForm";
import RegistrationInputForm from "./RegistrationInputForm";
import useLoginForm from "../hooks/useLoginForm";

const LoginForm = () => {
  const { showModal, openLoginForm, closeLoginForm } = useLoginForm();
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [username, setUsername] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleRegisterClick = () => {
    setShowRegisterForm(true);
    setUsername("Not accepting new users...");
  };

  const handleLoginClick = () => {
    setShowRegisterForm(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      closeLoginForm();
    }
  };

  useEffect(() => {
    if (showModal) {
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.removeEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [showModal]);

  return (
    <div className={styles.mainContent}>
      <button className={styles.loginBtn} onClick={openLoginForm}>
        Login
      </button>
      {showModal && (
        <div className={styles.loginModal} onClick={closeLoginForm}>
          <div
            className={styles.loginForm}
            onClick={(e) => e.stopPropagation()} // Prevent event propagation to the parent
          >
            <button className={styles.closeBtn} onClick={closeLoginForm}>
              x
            </button>
            <h1 className={styles.h1}>R</h1>
            <h2 className={styles.h2}>Welcome, user</h2>
            <button
              className={`${styles.switchButton} ${
                showRegisterForm ? "" : styles.active
              }`}
              onClick={handleLoginClick}
            >
              Log In
            </button>
            <button
              className={`${styles.switchButton} ${
                showRegisterForm ? styles.active : ""
              }`}
              onClick={handleRegisterClick}
            >
              Register
            </button>
            {showRegisterForm ? (
              <RegistrationInputForm
                username={username}
                onUsernameChange={handleUsernameChange}
              />
            ) : (
              <LoginInputForm
                username={username}
                onUsernameChange={handleUsernameChange}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginForm;