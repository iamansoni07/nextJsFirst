import React from "react";
import { motion } from "framer-motion";

import { AppWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Header.scss";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => (
  <div className="app__header app__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      // Animates the element from left (-100px) to center (0px) and fades in (opacity from 0 to 1)
      transition={{ duration: 0.5 }} // Animation duration of 0.5 seconds
      className="app__header-info"
    >
      {/* <div>test Font Aman Soni</div> */}

      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <div style={{ marginLeft: 1 }}>
            <p className="p-text"> Hello, I am</p>
            <h1 className="head-text-name">AMAN SONI</h1>
          </div>
        </div>

        <div className="tag-cmp app__flex">
          <p className="p-text">
            I am a passionate web developer with a strong interest in creating
            responsive and user-friendly websites that provide seamless digital
            experiences.I enjoy learning new technologies, and bringing creative
            ideas to life through code.
          </p>
        </div>
      </div>
    </motion.div>

    {/* the profile image appears first, followed by the scaling effect of the circle image. */}
    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      <img src={images.profile} alt="profile_bg" />
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: "easeInOut" }}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"
      />
    </motion.div>

    {/* Each circle smoothly scales in and fades into view when the parent component enters the viewport. */}
    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {[images.react, images.javascript2, images.nodejs2].map(
        (circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="profile_bg" />
          </div>
        )
      )}
    </motion.div>
  </div>
);

export default AppWrap(Header, "home");
