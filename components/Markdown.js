// /components/Markdown.js
import React, { useState, useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import PropTypes from "prop-types";
import gfm from "remark-gfm";
import styles from "/styles/Markdown.module.css";

const headerLevels = [1, 2, 3, 4, 5, 6];

const Header = ({ level, children }) => (
  <React.Fragment>
    {React.createElement(`h${level}`, { className: styles.header }, children)}
  </React.Fragment>
);

const Markdown = ({ content }) => {
  const [visibleHeaders, setVisibleHeaders] = useState([]);
  const observer = useRef();

  const intersectionCallback = (entries) => {
    const visible = entries.filter((entry) => entry.isIntersecting);
    setVisibleHeaders(visible.map((entry) => entry.target.id));
  };

  useEffect(() => {
    observer.current = new IntersectionObserver(intersectionCallback, {
      rootMargin: "0px 0px -95% 0px",
    });

    headerLevels.forEach((level) => {
      const headers = Array.from(document.querySelectorAll(`h${level}`));
      headers.forEach((header) => observer.current.observe(header));
    });

    return () => {
      observer.current.disconnect();
    };
  }, []);

  return (
    <div>
      <div className={styles.stickyContainer}>
        {visibleHeaders.map((id) => (
          <h1 key={id} className={styles.header}>
            {id}
          </h1>
        ))}
      </div>
      <ReactMarkdown
        className={styles.markdown}
        remarkPlugins={[gfm]}
        components={{
          h1: ({ children }) => <Header level={1} children={children} />,
          h2: ({ children }) => <Header level={2} children={children} />,
          h3: ({ children }) => <Header level={3} children={children} />,
          h4: ({ children }) => <Header level={4} children={children} />,
          h5: ({ children }) => <Header level={5} children={children} />,
          h6: ({ children }) => <Header level={6} children={children} />,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

Markdown.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Markdown;
