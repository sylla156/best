import React, { useState } from "react";
import "./Sidebar.scss";

export default function Sidebar({ title }) {
  let [nameClassChoose, handleChangeNameClassChoose] = useState(false);
  function onHanbleNavbar() {
    handleChangeNameClassChoose(!nameClassChoose);
  }
 
  return (
    <>
      <NavBtn onHanbleNavbar={onHanbleNavbar} title={title} nameClassChoose={nameClassChoose} />
      <NavBar
        nameClassChoose={nameClassChoose}
       
      />
    </>
  );
}

function NavBtn({ title, onHanbleNavbar, nameClassChoose}) {
  return (
    <div className="sidebar">
      <h1 className="sidebar__title">{title}</h1>
      <div className={`sidebar__btn ${nameClassChoose? 'btn__enable': 'btn__disable'}`} onClick={onHanbleNavbar}>
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
         <p>about</p>
         <p>works</p>
         <p>Contact</p>
     </div>
    </div>
  );
}
