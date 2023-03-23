// / components/Layout.js
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Menu from "./Menu";
import LoginForm from "./LoginForm";

const Layout = ({ children }) => {
  const [time, setTime] = useState(null);
  const [location, setLocation] = useState("");
  const asciiGalleryRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    const fetchLocation = async () => {
      try {
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();
        setLocation(data.city);
      } catch (error) {
        console.error("Failed to fetch location:", error);
      }
    };

    fetchLocation();

    const script = document.createElement("script");
    script.src = "https://textart.io/gadgets/ascii.figlet.js";
    script.async = true;
    script.onload = () => {
      const ascii_text = "Robert";
      const ascii_style = "isometric1";
      const gallery = asciiGalleryRef.current;
      if (window.figlet && gallery) {
        const ascii_art = window.figlet.generate(ascii_text, {
          style: ascii_style,
        });
        gallery.innerHTML = `<pre>${ascii_art}</pre>`;
      }
    };

    document.body.appendChild(script);

    return () => {
      clearInterval(intervalId);
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <h1>My Website</h1>
      <p>My Website is awesome!</p>
      {time && (
        <>
          <p>Current time: {time.toLocaleTimeString()}</p>
          <p>Current date: {time.toLocaleDateString()}</p>
          <p>Current date and time: {time.toLocaleString()}</p>
        </>
      )}
      <p>Current location: {location}</p>
      <Menu />
      <LoginForm />
      <main>{children}</main>
      <div
        id="ascii-gallery"
        className="ascii-default-style"
        ref={asciiGalleryRef}
      ></div>
    </>
  );
};

export default Layout;
