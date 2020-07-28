import React from "react";
import { facebook, gmail, instagram, linkedin, github } from "../assets";
import style from "./socialMedia.css";

function SocialMedia(props) {
  return (
    <div className="socialMediacontainer">
      <a href="https://www.facebook.com/rajsrivastvaaa">
        <img src={facebook} alt="" />
      </a>
      {/* <a href="rajsrivastvaa@gmail.com">
        <img src={gmail} alt="" />
      </a> */}

      <a href="https://www.instagram.com/rajsrivastvaa/">
        <img src={instagram} alt="" />
      </a>
      <a href="https://www.linkedin.com/in/rahul-raj-712177186/">
        <img src={linkedin} alt="" />
      </a>
      <a href="https://github.com/rajsrivastvaa">
        <img src={github} alt="" />
      </a>
    </div>
  );
}

export default SocialMedia;
