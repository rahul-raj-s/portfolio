import React from "react";
import style from "./about.module.css";
import Information from "../Information";
import Experience from "../experience";

export default function About(props) {
  return (
    <div className={style.aboutSection} id="about">
      <div className={style.poster}>
        <div className={style.posterRight}>
          <h2>Work Experience</h2>
          {Information.experience.map(({ company, position, start, end }) => (
            <Experience
              company={company}
              position={position}
              start={start}
              end={end}
              key={company + start}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
