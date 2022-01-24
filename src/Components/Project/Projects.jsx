import React from "react";
import "./project.scss";


export default function Projects({}) {
  return (
    <div className="project" data-scroll-section>
      <nav className="project__nav">
        <p onMouseEnter={hanbleBgChange} onClick={handleProject} data-position={0}>
          <span>0.1</span> e-commerce
        </p>
        <p onMouseEnter={hanbleBgChange} onClick={handleProject} data-position={1}>
          <span> 0.2</span> gestion de stock
        </p>
        <p onMouseEnter={hanbleBgChange} onClick={handleProject} data-position={2}>
          <span>0.3</span> theme wordpress
        </p>
        <p onMouseEnter={hanbleBgChange} onClick={handleProject} data-position={3}>
          <span> 0.4 </span> salle de sport
        </p>
      </nav>
    </div>
  );
}

const hanbleBgChange = function (e) {
    const value = e.target.dataset.position;
    const nameClass = ['flamme','fleur','women','etoile']
    const bg = document.querySelector('.project');

    for (let index = 0; index < nameClass.length; index++) {
        const item = nameClass[index];
       if(index == value){
           bg.classList.add(item)
           continue;
       }else {
           bg.classList.remove(item)
       }
    }
};



const handleProject = function (e) {
    
  };