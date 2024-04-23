import { Link, useNavigate } from "react-router-dom";
import {
  ContactOptionsContainer,
  SecondaryButton,
  PrimaryButton,
  assistiveText,
  ContactOptionsContainer__ToProjects,
  ContactOptionsContainer__Logo,
  ContactOptionsContainer__Arrow,
} from "./ContactOptions.module.scss";
import * as logos from "../../assets/Logos";
import { useRef, useState, useEffect } from "react";
import arrow from "../../assets/svg/arrow.svg";
import useWindowWidth from "../../customHooks/useWindowWidth";

export default function ContactOptions({ offsetSize }) {
  const navigate = useNavigate();
  const refForTop = useRef(0);
  const [sectionHeight, setSectionHeight] = useState(0);
  const windowWidth = useWindowWidth(window.innerWidth);
  const [sidePadding, setSidePadding] = useState(0);

  useEffect(() => {
    console.log(offsetSize);
    setSectionHeight(window.innerHeight - refForTop.current.offsetTop);
    setSidePadding(windowWidth > 480 ? 0 : offsetSize);
  }, [offsetSize]);
  //`${windowWidth > 480 ? 0 : offsetSize}`
  return (
    <section
      className={ContactOptionsContainer}
      ref={refForTop}
      style={{
        height: sectionHeight,
        paddingLeft: sidePadding,
        paddingRight: sidePadding,
      }}
    >
      <a
        href="https://www.linkedin.com/in/helen-moffat/"
        target="_blank"
        rel="noopener"
      >
        <img
          src={logos["linkedInLogo"]}
          alt="Link to my linkedIn profile"
          className={ContactOptionsContainer__Logo}
        />
        <span className={assistiveText}>My linkedIn profile</span>
      </a>
      <p>
        Send me an <a>email</a>
      </p>
      <p>Or you can always...</p>
      <button className={SecondaryButton}>Contact me</button>
      <div className={ContactOptionsContainer__ToProjects}>
        <img
          src={arrow}
          alt={
            "Friendly doodle of an arrow pointing to the My Projects button."
          }
          className={ContactOptionsContainer__Arrow}
        />
        <button
          className={PrimaryButton}
          onClick={() => setTimeout(() => navigate("/#Projects"), 100)}
        >
          My Projects
        </button>
      </div>
    </section>
  );
}
