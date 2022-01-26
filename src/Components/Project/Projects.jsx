import React from "react";
import "./project.scss";
import FirstProject from "./Components/FirstProject";

export default function Projects({}) {
  return (
    <>
      <div className="project" data-scroll-section>
        <nav className="project__nav">
          <div
            onMouseEnter={hanbleBgChange}
            onClick={handleProject}
            data-position={0}
          >
            <p className="enable">
              <span>0.1</span> e-commerce
            </p>
          </div>
          <div
            onMouseEnter={hanbleBgChange}
            onClick={handleProject}
            data-position={1}
          >
            <p>
              <span> 0.2</span> gestion de stock
            </p>
          </div>
          <div
            onMouseEnter={hanbleBgChange}
            onClick={handleProject}
            data-position={2}
          >
            <p>
              <span>0.3</span> theme wordpress
            </p>
          </div>
          <div
            onMouseEnter={hanbleBgChange}
            onClick={handleProject}
            data-position={3}
          >
            <p>
              <span> 0.4 </span> salle de sport
            </p>
          </div>
        </nav>
      </div>
     {/* <FirstProject/> */}
    </>
  );
}

const hanbleBgChange = function (e) {
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

const handleProject = function (e) {};
