// pages/about.js
import React from "react";
import Layout from "../components/Layout";
import styles from "../styles/About.module.css";

const PageNotFound = () => (
  <Layout>
    <div className={styles.container}>
      <h2 className={styles.title}>404! Page Not Found</h2>

    </div>
  </Layout>
);

export default PageNotFound;
