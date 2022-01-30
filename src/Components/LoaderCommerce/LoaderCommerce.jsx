import React, { useRef, useEffect } from "react";
import "./loaderCommerce.scss";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";

export default function LoaderCommerce({}) {
  const container = useRef();
  const element1 = useRef();
  const element2 = useRef();
  const element3 = useRef();

  const inverse = function(){
    gsap.to(container.current, {
        duration: 2,
        height: () => innerHeight,
        ease: "bounce.out",
      });
  
      gsap.to(element1.current, {
        delay: 2,
        duration: 1,
        height: 0,
      });
  
      gsap.to(element2.current, {
        delay: 2.4,
        duration: 1,
        height: 0,
      });
  
      gsap.to(element3.current, {
        delay: 2.8,
        duration: 1,
        height: 0,
      });
  
      gsap.to(container.current, {
          delay:3,
          duration: 2,
          height: () => innerHeight,
          width:0,
          ease: "rough({ template: none.out, strength: 1, points: 20, taper: none, randomize: true, clamp: false})",
        });
  }
  
  useEffect(() => {
      inverse()
  });

  return (
    <div className="loaderCommerce" ref={container}>
      <div className="loaderCommerce1 element" ref={element1}></div>
      <div className="loaderCommerce2 element" ref={element2}></div>
      <div className="loaderCommerce3 element" ref={element3}></div>
    </div>
  );
}
