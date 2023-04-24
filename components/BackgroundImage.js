import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import {
  images,
  TRANSITION_TIME,
  AUTO_CHANGE_INTERVAL,
} from "/config/backgroundConfig";

const BackgroundImage = () => {
  const [index, setIndex] = useState(0);

  const changeImage = (step) => {
    setIndex((prevIndex) => {
      const newIndex = prevIndex + step;
      if (newIndex < 0) return images.length - 1;
      if (newIndex >= images.length) return 0;
      return newIndex;
    });
  };

const handleKeyDown = (e) => {
  if (e.key === "ArrowLeft") {
    changeImage(-1);
  } else if (e.key === "ArrowRight") {
    changeImage(1);
  }
};


  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => changeImage(1),
    onSwipedRight: () => changeImage(-1),
  });

  useEffect(() => {
    const timer = setTimeout(() => changeImage(1), AUTO_CHANGE_INTERVAL);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [index]);

  const backgroundImageStyle = {
    backgroundImage: `url(${images[index]})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
    opacity: 1,
    transition: `opacity ${TRANSITION_TIME}ms ease-in-out`,
  };

  const swipeOverlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 999,
  };

  return (
    <>
      {images.map((image, i) => (
        <div
          key={i}
          style={{
            ...backgroundImageStyle,
            backgroundImage: `url(${image})`,
            opacity: i === index ? 1 : 0,
          }}
        />
      ))}
      <div {...swipeHandlers} style={swipeOverlayStyle}></div>
    </>
  );
};

export default BackgroundImage;
