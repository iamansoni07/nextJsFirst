import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./About.scss";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";

// const abouts = [
//   {
//     title: "Web Development",
//     description: "I am a good web developer.",
//     imgUrl: images.about01,
//   },
//   {
//     title: "Front end development",
//     description: "I am a good Front end developer.",
//     imgUrl: images.about02,
//   },
//   {
//     title: "Back end development",
//     description: "I am a good Back end developer.",
//     imgUrl: images.about03,
//   },
//   {
//     title: "MERN stack development",
//     description: "I am a good MERN stack development.",
//     imgUrl: images.about04,
//   },
// ];

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">
        {" "}
        <h2 className="head-text">
          <span>Good Development</span> <br /> Drives{" "}
          <span>Great Business</span>
        </h2>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
