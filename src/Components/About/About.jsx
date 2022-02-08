import React from "react";
import "./about.scss";
import self from "./img/self.jpg";

export default function About({}) {
  return (
    <div className="aboutProject" id='about'>
      <div className="aboutProject__title">
        <h1>
          <span>sylla</span>
          <span>ibrahim</span>
        </h1>
      </div>

      <div className="aboutProject__content">
        <div className="aboutProject__content--description">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
            doloribus cumque dicta neque! Quae, doloremque voluptatem? Maiores
            vel enim aliquam blanditiis unde ipsum, molestias architecto nobis
            iure? Odio excepturi quam explicabo consequatur, iusto 
          </p>
        </div>

        <div className="aboutProject__content--img">
          <img src={self} alt="my picture for the website about" />
        </div>
      </div>
    </div>
  );
}
