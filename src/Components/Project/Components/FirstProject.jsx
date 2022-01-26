import React, { useEffect, useRef } from "react";
import "./firstproject.scss";
export default function FirstProject() {
    const container = useRef();

    

  return (
    <div className="firstproject">
      <div className="container" ref={container}>
        <div className="block block-1">
          <h1>asterisks.</h1>
        </div>
        <div className="block block-2">
          <h1>unlocked.</h1>
        </div>
        <div className="block block-3">
          <h1>offbeat.</h1>
        </div>
        <div className="block block-4">
          <h1>brutal.</h1>
        </div>
        <div className="block block-5">
          <h1>mouthwash.</h1>
        </div>
      </div>
    </div>
  );
}
