import { NavLink, useLocation } from "react-router-dom";
import "./NavBar.scss";
import { useEffect, useState } from "react";
import { useScrollSpy } from "@raddix/use-scroll-spy";

export default function NavBar() {
  //if actual menu items list html far away from button html add aria-controls="main-menu" to button (i.e. matching id of the list)

  const { hash, pathname } = useLocation();
  const [currentHash, setCurrentHash] = useState(
    pathname === "/" ? "Home" : "/Contact"
  );
  const headingIds = ["Home", "Projects", "About"];

  const activeId = useScrollSpy(headingIds, {
    rootMargin: "0% 0% -80% 0%",
  });

  useEffect(() => {
    const slicedHash = hash.slice(1);
    if (slicedHash) {
      const element = document.getElementById(slicedHash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else if (pathname) {
      setCurrentHash("/contact");
    }
  }, [hash]);

  useEffect(() => {
    if (pathname !== "/contact") setCurrentHash(activeId);
  }, [activeId]);
  return (
    <nav aria-label="Main menu" className="NavBar">
      <ul aria-controls="main-menu" className="NavListContainer">
        <NavLink
          to={"/#Home"}
          className={
            currentHash === "Home" ? "NavBar__Link__active" : "NavBar__Link"
          }
        >
          Home
        </NavLink>
        <NavLink
          to={"/#Projects"}
          className={
            currentHash === "Projects" ? "NavBar__Link__active" : "NavBar__Link"
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/#About"
          className={
            currentHash === "About" ? "NavBar__Link__active" : "NavBar__Link"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={
            currentHash === "/contact" ? "NavBar__Link__active" : "NavBar__Link"
          }
        >
          Contact
        </NavLink>
      </ul>
      <div className="MobToggleContainer">
        <button aria-label="Open the menu" aria-expanded="true">
          &#9776;
        </button>
        <button aria-label="Close the menu" aria-expanded="false">
          &#215;
        </button>
      </div>
    </nav>
  );
}
