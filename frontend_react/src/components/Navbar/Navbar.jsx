import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import "./Navbar.scss";
import { images } from "../../constants";

const Navbar = () => {
  const [hamMenu, setHamMenu] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <a href="/#home">
          <img src={images.logo} alt="logo" />
        </a>
      </div>

      <ul className="app__navbar-links">
        {["home", "about", "work", "skills", "contact"].map((item) => (
          <li key={`link-${item}`} className="app__flex p-text">
            <div></div>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
        {/* Add Resume Link */}
        <li key="link-resume" className="app__flex p-text">
          <div></div>
          <a
            href="https://drive.google.com/file/d/1aVIP7ZS7sRfldeJTFNeCApRcL3EZ5VBw/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </li>
      </ul>

      <div className="app__navbar-menu">
        {/* When clicked, it triggers the display of the mobile menu. */}
        <HiMenuAlt4 onClick={() => setHamMenu(true)} />

        {hamMenu && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            {/* When clicked, it sets hamMenu to false, hiding the mobile menu. */}
            <HiX onClick={() => setHamMenu(false)} />
            <ul>
              {["home", "about", "work", "skills", "contact"].map((item) => (
                <li key={item}>
                  {/* when a user clicks on a menu item, the menu will close */}
                  <a href={`#${item}`} onClick={() => setHamMenu(false)}>
                    {item}
                  </a>
                </li>
              ))}
              {/* Add Resume Link to Mobile Menu */}
              <li key="link-resume-mobile">
                <a
                  href="https://drive.google.com/file/d/1aVIP7ZS7sRfldeJTFNeCApRcL3EZ5VBw/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setHamMenu(false)}
                >
                  Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
