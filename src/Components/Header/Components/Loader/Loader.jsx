import React, { createRef, useEffect, useRef } from "react";
import gsap from "gsap";
import './Loader.scss';
export default function Loader() {
    const ga1 = useRef();
    const ga2 = useRef();
    const ga3 = useRef();
  
    useEffect(() => {
  
      gsap.to(ga1.current, {
        duration: 2,
        x: () => "-" + window.innerWidth,
        delay:1
      });
  
      gsap.to(ga2.current, {
        duration: 2,
        x: () => "-" + window.innerWidth,
        delay:1.3
      });
  
      gsap.to(ga3.current, {
        duration: 2,
        x: () => "-" + window.innerWidth,
        delay:1.6
  
      });
    });
  return (
    <div className="loader">
      <div className="loader--child1" ref={ga1}></div>
      <div className="loader--child2" ref={ga2}></div>
      <div className="loader--child3" ref={ga3}></div>
    </div>
  );
}
