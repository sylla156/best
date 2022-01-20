import React, { useState, useEffect } from "react";

import "./Sidebar.scss";

export default function Sidebar({ title }) {
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
      <NavBar nameClassChoose={nameClassChoose} />
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

function NavBar({ nameClassChoose }) {
  let nameClass = nameClassChoose ? "nav__enable" : "nav__disable";
  return (
    <div className={nameClass}>
      <div className="nav">
        <p onMouseMove={MouseEffect}>about</p>
        <p onMouseMove={MouseEffect}>works</p>
        <p onMouseMove={MouseEffect}>Contact</p>
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
  let img = document.querySelector(".navImg");
  
      img.style.top =  mouse.y + 100+ "px";
      img.style.left = mouse.x - 400+ "px";


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
      break;
  }
}
