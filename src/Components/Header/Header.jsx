import React from "react";
import "./Header.scss";
import './Components/Loader/Loader';
import Loader from "./Components/Loader/Loader";


export default function Header() {
 

  return (
    <header className="header">
     <Loader/>
    </header>
  );
}
