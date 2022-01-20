import React from "react";
import "./Header.scss";
import './Components/Loader/Loader';
import Loader from "./Components/Loader/Loader";
import Sidebar from './Components/Sidebar/Sidebar';


export default function Header() {
 
const links = ['element','element','element','element']
const title = 'sylla ibrahim';
  return (
    <header className="header">
     <Loader/>
     <Sidebar title={title} />
    </header>
  );
}
