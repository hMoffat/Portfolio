import { HeaderContainer, subtitleUnderline } from "./Header.module.scss";

export default function Header() {
  return (
    <header id="Home" className={HeaderContainer}>
      <h1>Helen Moffat</h1>
      <h2>Junior Software Developer</h2>
      <div className={subtitleUnderline} />
    </header>
  );
}
