import { useState, useEffect } from "react";

export default function windowWidth(initialWidth) {
  const [windowWidth, setWindowWidth] = useState(initialWidth);

  useEffect(() => {
    addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
    return removeEventListener("resize", () => {});
  }, []);

  return windowWidth;
}
