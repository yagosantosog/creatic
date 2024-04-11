import React, { useLayoutEffect, useState } from "react";

const base = {
  "pointer-events": "none",
  "user-select": "none",
  display: "block",
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  "border-radius": "100%",
  "z-index": 10000,
  "@keyframes pulse": {
    "0%": {
      transform: "scale(0.8) translate(-50%, -50%)"
    },
    "50%": {
      transform: "scale(1) translate(-50%, -50%)"
    },
    "100%": {
      transform: "scale(0.8) translate(-50%, -50%)"
    }
  },
  "@media only screen and (max-width: 700px)": {
    "#cursor": {
      display: "none"
    }
  }
};
const Cursor = ({
  size = 50,
  color = "radial-gradient(circle, rgba(109,149,252,0.3534663865546218) 0%, rgba(2,0,36,0) 48%)",
  opacity = .4,
  easing = "cubic-bezier(0.18, 0.89, 0.32, 1.28)",
  duration = 0,
  ...rest
}) => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useLayoutEffect(() => {
    document.onmousemove = (event) => {
      var e = event;
      setX(e.clientX);
      setY(e.clientY);
    };
  });

  const styles = {
    ...base,
    "background": color,
    opacity: opacity,
    width: size + "rem",
    height: size + "rem",
    top: y,
    left: x,
    "transition-timing-function": easing,
    "transition-duration": duration + "s"
  };
  return <div id="cursor" {...rest} style={styles} />;
};

export default Cursor;