import React, { useState, useEffect } from "react";
import "./projects.scss";
import Project from "./Components/Project";
import WebsiteContent from "../../assets/js/websiteContent";

export default function Projects({}) {
  const titles = WebsiteContent().project.titles;
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

  return (
    <>
      <div className="project" data-scroll-section>
        <nav className="project__nav">
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
      <Project />
    </>
  );
}

const hanbleChangeBackGround = function (e) {
  
  const value = e.target.dataset.position;
  const nameClass = ["flamme", "fleur", "women", "etoile"];
  const bg = document.querySelector(".project");
  const element = document.querySelectorAll(".project__nav div p");
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

const handleProject = function (e) {
  
};
