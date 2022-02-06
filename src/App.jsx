import React, { useEffect, useRef, useState } from "react";
import Header from "./Components/Header/Header";
import "./App.scss";
import Projects from "./Components/Project/Projects";
import ProjecCommerce from "./Components/Project/Components/Commerce/ProjectCommerce"
import createScrollSnap from "scroll-snap";
import Space from "./Components/Project/Components/Space/Space";
import About from "./Components/About/About";
import Skills from './Components/Skills/Skills';

export default function App() {
  const container = useRef();
  const [visibility,onChangeVisibility] = useState(null);
  useEffect(() => {
    const { bind, unbind } = createScrollSnap(container.current, {
      snapDestinationX: "0%",
      snapDestinationY: "-100vh",
      timeout: 100,
      duration: 100,
      threshold: 0.3,
      snapStop: false,
    });


    
    return function reset() {
      unbind();
    };
  });

  const content = <h1>hello world</h1>
  useEffect(() => {
      console.log();
  },[visibility])


  return (
      <>
     <div ref={container} className="page">
       {(visibility === null) && <Header /> }
       { (visibility === null) && <Projects onChangeVisibility={onChangeVisibility}/>}
       { (visibility == 1) && <ProjecCommerce onChangeVisibility={onChangeVisibility}/>}
       { (visibility == 0) && <Space onChangeVisibility={onChangeVisibility}/>}
       { (visibility === null ) && <Skills/>}
      </div>)
      </>
  );
}

