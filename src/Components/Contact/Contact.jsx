import React, { useCallback, useRef } from "react";
import "./contact.scss";

export default function Contact({}) {

const request = useRef();

const send = useCallback((e) => {
        const x =  (window.innerWidth - e.pageX * parseInt(9)) / 100;
        const y =(window.innerHeight - e.pageY * parseInt(9)) / 100;
        request.current.style.transform = `translate(${x}px,${y}px)`
}) 

  return (
    <div className="contactProject" onMouseMove={send}> 
      <div className="contactProject__title">
        <span>let's</span>
        <span>talk</span>
        <span>about</span>
        <span>the</span>
        <span>project?</span>
      </div>

      <div className="contactProject__content">
          <div className="contactProject__content--help">
              <p>please contact me in any way you like</p>
          </div>
          <div className="contactProject__content--reseaux">
              <h3>social</h3>
              <div>
                  <p>Twttr</p>
                  <p>GH</p>
                  <p>LIN</p>
                  <p>FG</p>
                  <p>IG</p>
              </div>
          </div>
          <div className="contactProject__content--contact">
              <h3>contact</h3>
              <ol>
                  <li>syllaibrahim@gmail.com</li>
                  <li>+225 0777273745</li>
                  <li>whatsapp</li>
                  <li>telegram</li>
              </ol>
          </div>
         <div className="contactProject__content--send" ref={request}>
         <a href="mailto:syllaIbrahim@gmail.com">send a request</a>
         </div>
      </div>
    </div>
  );
}
