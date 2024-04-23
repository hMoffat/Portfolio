import { HeaderContainer, subtitleUnderline } from "./Header.module.scss";
import { useState, useRef, useEffect } from "react";

export default function Header({ setOffsetSize }) {
  const ref = useRef();
  useEffect(() => {
    setOffsetSize(ref.current.offsetLeft);
  }, []);
  return (
    <header id="Home" className={HeaderContainer}>
      <h1>Helen Moffat</h1>
      <h2>Junior Software Developer</h2>
      <div className={subtitleUnderline} ref={ref} />
    </header>
  );
}
