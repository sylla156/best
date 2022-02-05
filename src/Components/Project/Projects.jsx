import React, { useState, useEffect } from "react";
import "./projects.scss";
import WebsiteContent from "../../assets/js/websiteContent";

export default function Projects({ onChangeVisibility }) {
  const titles = WebsiteContent().project.titles;
  const trye = "kk";
  let isMobile = false;

  const onChangeIsMobile = (e) => {
    const width = e.target.innerWidth;
    if (width < 700) {
      isMobile = true;
    } else if (width > 700) {
      isMobile = false;
    }
  };
  useEffect(() => {
    window.addEventListener("resize", onChangeIsMobile);

    return function reset() {
      window.removeEventListener("resize", onChangeIsMobile);
    };
  }, []);

  const handleProject = function (e) {
    const position = e.target.dataset.position;
    console.log(position);
    onChangeVisibility(position);
  };

  return (
    <div className="projects" id="project">
      <nav className="projects__nav">
        {titles.map((item, index) => {
          return (
            <div
              onMouseEnter={isMobile ? console.log() : hanbleChangeBackGround}
              onMouseMove={isMobile ? hanbleChangeBackGround : console.log()}
              onClick={handleProject}
              data-position={index}
              key={index}
            >
              <p data-position={index}>
                <span>0.{1 + index}</span> {item}
              </p>
            </div>
          );
        })}
      </nav>
    </div>
  );
}

const hanbleChangeBackGround = function (e) {
  const value = e.target.dataset.position;
  const nameClass = ["flamme", "space", "women", "etoile"];
  const bg = document.querySelector(".projects");
  const element = document.querySelectorAll(".projects__nav div p");
  for (let index = 0; index < nameClass.length; index++) {
    const item = nameClass[index];
    if (index == value) {
      bg.classList.add(item);
      element[index].classList.add("enable");
      continue;
    } else {
      bg.classList.remove(item);
      element[index].classList.remove("enable");
    }
  }
};
