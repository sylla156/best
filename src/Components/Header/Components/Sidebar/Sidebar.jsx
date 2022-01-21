import React, { useState, useEffect } from "react";
import "./Sidebar.scss";

export default function Sidebar({ title,navTitle }) {
  let [nameClassChoose, handleChangeNameClassChoose] = useState(false);
  function onHanbleNavbar() {
    handleChangeNameClassChoose(!nameClassChoose);
  }

  return (
    <div>
      <NavBtn
        onHanbleNavbar={onHanbleNavbar}
        title={title}
        nameClassChoose={nameClassChoose}
      />
      <NavBar nameClassChoose={nameClassChoose} navTitle={navTitle} />
    </div>
  );
}

function NavBtn({ title, onHanbleNavbar, nameClassChoose }) {
  return (
    <div className="sidebar">
      <h1 className="sidebar__title">{title}</h1>
      <div
        className={`sidebar__btn ${
          nameClassChoose ? "btn__enable" : "btn__disable"
        }`}
        onClick={onHanbleNavbar}
      >
        <p className="sidebar__btn--element1"></p>
        <p className="sidebar__btn--element2"></p>
        <p className="sidebar__btn--element3"></p>
      </div>
    </div>
  );
}

function NavBar({ nameClassChoose, navTitle }) {
  let nameClass = nameClassChoose ? "nav__enable" : "nav__disable";
  return (
    <div className={nameClass}>
      <div className="nav">
       {
         navTitle.map((title,key)=>(
           <p  onMouseMove={MouseEffect}  key={key}>{title}</p>
         ))
       }
      </div>
      <div className="navImg"></div>
    </div>
  );
}

function MouseEffect(event) {
  const mouse = {
    x: 0,
    y: 0,
  };
 
  mouse.x = event.pageX;
  mouse.y = event.pageY;
  const img = document.querySelector(".navImg");
  
      img.style.transform =  `translate(${mouse.x - img.offsetWidth/2}px, ${mouse.y - img.offsetHeight/2}px)`;

  switch (event.target.innerText) {
    case "ABOUT":
      img.classList.add('about');
      img.classList.remove('works',"contact");
      break;

    case "WORKS":
        img.classList.add('works');
        img.classList.remove('about',"contact");

      break;

    case "CONTACT":
        img.classList.add('contact');
        img.classList.remove('works',"about");
      break;

    default:
      img.classList.remove('works',"about",'contact');

      break;
  }
}
