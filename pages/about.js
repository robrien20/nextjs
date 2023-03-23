// pages/about.js
import React from "react";
import Layout from "../components/Layout";
import styles from "../styles/About.module.css";

const About = () => (
  <Layout>
    <div className={styles.container}>
      <h2 className={styles.title}>About Us</h2>
      <p className={styles.paragraph}>
        We are a company that provides the best services and products for our
        customers. Our goal is to deliver exceptional value, exceed
        expectations, and maintain the highest standards of quality and
        integrity.
      </p>
      <p className={styles.paragraph}>
        Our team consists of industry experts with years of experience in their
        respective fields. We are committed to continuous improvement and
        innovation, and we strive to create a positive impact in our community
        and beyond.
      </p>
      <p className={styles.paragraph}>
        Thank you for visiting our website, and please feel free to contact us
        with any questions or feedback you may have. We look forward to serving
        you and helping you achieve your goals.
      </p>
    </div>
  </Layout>
);

export default About;
