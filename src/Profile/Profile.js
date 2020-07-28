import React from "react";
import RahulProfilePic from "../assets/RahulProfilePic.jpeg";
import SocialMedia from "../SocialMedia";
import style from "./Profile.module.css";
import { useHistory } from "react-router-dom";

function Profile(props) {
  return (
    <div className={style.profileContainer}>
      <div className={style.iconContainer}>
        <section>
          <h1>RAHUL RAJ</h1>
          <div className={style.optionConatiner}>
            <a href="#work">Work</a>
          </div>
          <div className={style.optionConatiner}>
            <a href="#about">About</a>
          </div>
          <div className={style.optionConatiner}>
            <a href="#">Resume</a>
          </div>
        </section>
        <div className={style.profilePictureContainer}>
          <img src={RahulProfilePic} alt="profilePic" />
          <SocialMedia />
          <p>Connect with</p>
        </div>
      </div>
      <section className={style.optionListContainer}></section>
    </div>
  );
}

export default Profile;
