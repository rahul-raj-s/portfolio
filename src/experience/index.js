import React from "react";
import style from "./experience.module.css";

export default function Experience({ company, position, start, end }) {
  return (
    <div className={style.experienceContainer}>
      <span>
        <h3>{company}</h3>
        <h5>{position}</h5>
        <span>Start: {start}</span>
        <span> End: {end}</span>
      </span>
    </div>
  );
}
