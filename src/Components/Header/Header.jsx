import React from "react";
import "./Header.scss";
import './Components/Loader/Loader';
import Loader from "./Components/Loader/Loader";
import Sidebar from './Components/Sidebar/Sidebar';
import Content from '../../assets/js/Content'

export default function Header() {
 
const navTitle = Content().header.navTitle;
const title = Content().header.title;
  return (
    <header className="header">
     <Loader/>
     <Sidebar title={title} navTitle={navTitle} />
    </header>
  );
}
