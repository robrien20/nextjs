// /lib/useStickyHeaders.js
import { useState, useEffect } from "react";

const useStickyHeaders = (headerSelector) => {
  const [activeHeader, setActiveHeader] = useState("");

  useEffect(() => {
    const headers = document.querySelectorAll(headerSelector);
    const headerObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const tag = entry.target.tagName.toLowerCase();
            setActiveHeader(`${tag}: ${entry.target.innerText}`);
          }
        });
      },
      { rootMargin: "-1px 0px 0px 0px" }
    );

    headers.forEach((header) => headerObserver.observe(header));

    return () => {
      headers.forEach((header) => headerObserver.unobserve(header));
    };
  }, [headerSelector]);

  return activeHeader;
};

export default useStickyHeaders;
