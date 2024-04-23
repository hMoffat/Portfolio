import { HeaderContainer, subtitleUnderline } from "./Header.module.scss";
import { useState, useRef, useEffect } from "react";
import useWindowWidth from "../../customHooks/useWindowWidth.js";

export default function Header({ setOffsetSize }) {
  const ref = useRef();
  const windowWidth = useWindowWidth(window.innerWidth);
  useEffect(() => {
    setOffsetSize(ref.current.offsetLeft);
  }, [windowWidth]);
  return (
    <header id="Home" className={HeaderContainer}>
      <h1>Helen Moffat</h1>
      <h2>Junior Software Developer</h2>
      <div className={subtitleUnderline} ref={ref} />
    </header>
  );
}
