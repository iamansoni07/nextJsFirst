import React from "react";
import { BsTwitter, BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";
import LeetCodeIcon from "../assets/icons/LeetCodeIcon";
import CodeChefIcon from "../assets/icons/CodeChefIcon";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a
        href="https://www.linkedin.com/in/amansoni0713/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsLinkedin />
      </a>
    </div>
    <div>
      <a
        href="https://x.com/amansoni0713"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsTwitter />
      </a>
    </div>
    <div>
      <a
        href="https://github.com/iamansoni07"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsGithub />
      </a>
    </div>
    <div>
      <a
        href="https://leetcode.com/u/amansoni0713/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LeetCodeIcon />
      </a>
    </div>
    <div>
      <a
        href="https://www.codechef.com/users/amansoni0713"
        target="_blank"
        rel="noopener noreferrer"
      >
        <CodeChefIcon />
      </a>
    </div>
    <div>
      <a
        href="https://www.instagram.com/amansoni0713/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsInstagram />
      </a>
    </div>
  </div>
);

export default SocialMedia;
