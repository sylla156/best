import React from "react";
import LoaderProject from "../LoaderProject/LoaderProject";
import "./space.scss";

export default function Space({}) {
  console.log("ll");
  return (
    <div className="spaces">
      {/* <LoaderProject/> */}
      <div className="spaces__header">
        <div className="spaces__header--contentOne">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste
            similique fugit doloremque assumenda porro dolore voluptates
            voluptatibus animi sequi! Suscipit repellendus at minima magni eos
            libero ab error, culpa nihil?
          </p>
        </div>

        <div className="spaces__header--title">
          <span>my</span>
          <span>approach</span>
          <span>to this</span>
          <span>project</span>
        </div>
        <div className="spaces__header--contentTwo">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis
            delectus sit illo praesentium similique, porro dignissimos
            laudantium blanditiis amet? Officia rerum quis deleniti voluptatibus
            itaque suscipit voluptatum earum aliquid eius!
          </p>
        </div>
      </div>
    </div>
  );
}
