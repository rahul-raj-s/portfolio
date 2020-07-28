import React from "react";
import Card from "../card";
import Information from "../Information";
import style from "./projects.module.css";

export default function Projects(props) {
  return (
    <div className={style.projectPage} id="work">
      <div className={style.projectListContainer}>
        {Information.projects.map(
          ({ title, tech, link, image, description, source }) => (
            <Card
              title={title}
              tech={tech}
              link={link}
              image={image}
              source={source}
              description={description}
              key={title}
            />
          )
        )}
      </div>
    </div>
  );
}
