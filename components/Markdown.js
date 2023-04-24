import React, { useState, useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import PropTypes from "prop-types";
import gfm from "remark-gfm";
import styles from "/styles/Markdown.module.css";

const headerLevels = [1, 2, 3, 4, 5, 6];

const Header = ({ level, children }) => {
  const headerText = React.Children.toArray(children).reduce(
    (text, child) => text + (typeof child === "string" ? child : ""),
    ""
  );

  const id = headerText
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, "")
    .split(" ")
    .join("-");

  return React.createElement(
    `h${level}`,
    { className: styles.header, id: id },
    children
  );
};

const Markdown = ({ content }) => {
  const [visibleHeaders, setVisibleHeaders] = useState([]);
  const observer = useRef();

  const intersectionCallback = (entries) => {
    const headersStack = visibleHeaders.slice();
    entries.forEach((entry) => {
      const level = parseInt(entry.target.tagName.slice(1), 10);
      const id = entry.target.id;
      if (entry.isIntersecting) {
        headersStack[level - 1] = id;
      } else {
        headersStack[level - 1] = null;
      }
    });

    const newVisibleHeaders = headersStack.filter((header) => header !== null);
    setVisibleHeaders(newVisibleHeaders);
  };

  useEffect(() => {
    observer.current = new IntersectionObserver(intersectionCallback, {
      threshold: 0,
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
        {visibleHeaders.map((id, index) => (
          <div
            key={id}
            className={`${styles.headerWrapper} ${
              styles[`headerWrapper${index + 1}`]
            }`}
          >
            <h1 className={styles.header}>{id}</h1>
          </div>
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
