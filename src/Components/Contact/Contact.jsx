import React, { useCallback, useRef } from "react";
import "./contact.scss";

export default function Contact({}) {

const request = useRef();

const send = useCallback((e) => {
        const x =  ( e.pageX * parseInt(9)) / 100;
        const y =(e.pageY * parseInt(9)) / 100;
        request.current.style.transform = `translate(${x}px,${y}px)`
}) 

  return (
    <div className="contactProject" onMouseMove={send} id='contact'> 
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
                  <p><a href="https://www.linkedin.com/in/brahimcode" target='_blank'>Linkedin</a></p>
                  <p><a href="https://www.github.com/sylla156" target='_blank'>Github</a></p>
                  <p><a href="https://wa.me/2250506430832" target='_blank'>whatsapp</a></p>
              </div>
          </div>
          <div className="contactProject__content--contact">
              <h3>contact</h3>
              <ol>
                  <li><b>Email: </b> ibrahimsyllac196@gmail.com</li>
                  <li><b>Phone: </b> +225 0506430832</li>
              </ol>
          </div>
         <div className="contactProject__content--send" ref={request}>
         <a href="mailto:ibrahimsyllac196@gmail.com">send a request</a>
         </div>
      </div>
    </div>
  );
}
