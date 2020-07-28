import React, { useState } from "react";
import style from "./card.module.css";

export default function Card({
  title,
  link,
  source,
  description,
  image,
  tech,
}) {
  const [front, setFront] = useState(true);

  return (
    <div className={style.cardContainer}>
      <div
        className={style.cardTop}
        onMouseEnter={() => setFront(false)}
        onMouseLeave={() => setFront(true)}
      >
        {front ? (
          <img src={image} alt="" />
        ) : (
          <div className={style.cardBack}>
            <p>
              Get <a href={source}>Source code</a> and <a href={link}>Link</a>.
            </p>
            <p>{description}</p>
            <div className={style.chipContainer}>
              {tech.map((item) => (
                <div className={style.chip}>{item}</div>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className={style.cardBottom}>
        <h3>{title}</h3>
      </div>
    </div>
  );
}
