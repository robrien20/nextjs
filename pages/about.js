// pages/about.js
import React from "react";
import Layout from "../components/Layout";
import styles from "../styles/About.module.css";

const About = () => (
  <Layout>
    <div className={styles.container}>
      <h2 className={styles.title}>About</h2>
      <p className={styles.paragraph}>
        I am a back end developer at Goldman Sachs. I studied Computer Science
        at Columbia University.
      </p>
      <p className={styles.paragraph}>
        I am constantly pursuing personal creative projects. While social media
        is great for sharing these projects, I wanted to build my own platform
        that I have complete control over.
      </p>
      <p className={styles.paragraph}>
        So thats why I made this website. It&apos;s place for me to test ideas,
        showcase things I&apos;ve worked on, be creative, etc etc. Beyond
        coding, I love experimenting with graphic design and photography, unique
        and original user experiences. There are some websites that just feel
        like they are worth exploring, and thats what I am attempting to do
        here. So please, explore and enjoy.
      </p>
      <p className={styles.paragraph} style={{ textIndent: "10%" }}>
        - Robert
      </p>
    </div>
  </Layout>
);

export default About;
